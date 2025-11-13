define([
  'core/js/adapt',
  'core/js/views/componentView',
  'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {

  class FadeTextView extends ComponentView {

    events() {
      return {
        'click .fadetext__widget': 'onClick'
      };
    }

    preRender() {
      this.checkIfResetOnRevisit();
    }

    postRender() {
      this.setReadyStatus();
      
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const disableAnimation = this.model.get('_fadeText')._disableAnimation;
      
      if (prefersReducedMotion || disableAnimation) {
        this.setupStaticView();
        this.setCompletionStatus();
        return;
      }

      this.setupScrollAnimation();
      this.setupIntersectionObserver();
    }

    setupStaticView() {
      // Display text in active color without animation
      const $content = this.$('.fadetext__text');
      const activeColor = this.model.get('_fadeText')._activeColor || '#000000';
      $content.css('color', activeColor);
      this.$('.fadetext__content').addClass('is-static');
    }

    setupScrollAnimation() {
      const $textContainer = this.$('.fadetext__text');
      const text = $textContainer.text().trim();
      
      if (!text) {
        console.warn('adapt-fadetext: No text content found');
        return;
      }

      // Split text into words and wrap each in a span
      const words = text.split(/\s+/).filter(word => word.length > 0);
      $textContainer.empty();

      words.forEach((word, index) => {
        const $span = $('<span>', {
          'class': 'fadetext__word',
          'data-word-index': index,
          'text': word
        });
        $textContainer.append($span);
        
        // Add space after each word except the last
        if (index < words.length - 1) {
          $textContainer.append(' ');
        }
      });

      // Apply CSS variables from settings
      const settings = this.model.get('_fadeText');
      const fadedColor = settings._fadedColor || '#cccccc';
      const activeColor = settings._activeColor || '#000000';
      const transitionSpeed = settings._transitionSpeed || '0.3s';
      const smoothness = settings._smoothness || 'ease-out';

      // Set CSS custom properties on the container
      this.$('.fadetext__content').css({
        '--fadetext-faded-color': fadedColor,
        '--fadetext-active-color': activeColor,
        '--fadetext-transition-speed': transitionSpeed,
        '--fadetext-transition-timing': smoothness
      });

      // Initialize word colors
      this.$('.fadetext__word').css('color', fadedColor);

      // Bind scroll handler with throttling
      this._handleScroll = this.handleScroll.bind(this);
      this._throttledScroll = this.throttle(this._handleScroll, 16); // ~60fps
      
      $(window).on('scroll.fadetext', this._throttledScroll);
      $(window).on('resize.fadetext', this._throttledScroll);
      
      // Initial check
      this.handleScroll();
    }

    setupIntersectionObserver() {
      // Set completion when component comes into view
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.setCompletionStatus();
            }
          });
        }, {
          threshold: 0.1
        });

        observer.observe(this.$el[0]);
        this._intersectionObserver = observer;
      } else {
        // Fallback: set completion immediately
        this.setCompletionStatus();
      }
    }

    handleScroll() {
      const $words = this.$('.fadetext__word');
      const settings = this.model.get('_fadeText');
      const triggerPoint = settings._triggerPoint || 0.6;
      const activeColor = settings._activeColor || '#000000';
      const fadedColor = settings._fadedColor || '#cccccc';
      
      const windowHeight = window.innerHeight;
      const triggerPosition = windowHeight * triggerPoint;

      $words.each((index, wordElement) => {
        const rect = wordElement.getBoundingClientRect();
        
        if (rect.top < triggerPosition) {
          // Word has passed the trigger point - fade to active color
          $(wordElement).css('color', activeColor).addClass('is-active');
        } else {
          // Word hasn't reached trigger point - keep faded
          $(wordElement).css('color', fadedColor).removeClass('is-active');
        }
      });
    }

    // Throttle function to limit scroll event firing rate
    throttle(func, wait) {
      let timeout;
      let lastRan;
      
      return function executedFunction(...args) {
        const context = this;
        
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            if ((Date.now() - lastRan) >= wait) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, wait - (Date.now() - lastRan));
        }
      };
    }

    onClick() {
      // Optional: Add click interaction if needed
      // For now, this is a placeholder for future interactivity
    }

    remove() {
      // Clean up event listeners
      if (this._throttledScroll) {
        $(window).off('scroll.fadetext', this._throttledScroll);
        $(window).off('resize.fadetext', this._throttledScroll);
      }
      
      // Clean up intersection observer
      if (this._intersectionObserver) {
        this._intersectionObserver.disconnect();
      }
      
      ComponentView.prototype.remove.call(this);
    }

  }

  class FadeTextModel extends ComponentModel {
    
    defaults() {
      return ComponentModel.resultExtend('defaults', {
        _fadeText: {
          _triggerPoint: 0.6,
          _fadedColor: '#cccccc',
          _activeColor: '#000000',
          _transitionSpeed: '0.3s',
          _smoothness: 'ease-out',
          _disableAnimation: false
        }
      });
    }

  }

  return Adapt.register('fadetext', {
    model: FadeTextModel,
    view: FadeTextView
  });

});
