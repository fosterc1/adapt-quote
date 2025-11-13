# 🔧 QUICK FIX: Rename Repository in 30 Seconds

## The Problem

✅ Production ZIPs work perfectly  
❌ Main branch "Download ZIP" fails with "Package does not contain a schema"

**Root Cause**: Repository name `adapt-quote` doesn't match plugin name `adapt-fadetext`

## The Fix (30 seconds)

### Step 1: Open Repository Settings
Go to: https://github.com/fosterc1/adapt-quote/settings

### Step 2: Scroll to "Repository name"
It's near the top of the settings page

### Step 3: Rename
- **Current name**: `adapt-quote`
- **New name**: `adapt-fadetext`

### Step 4: Click "Rename"
GitHub will ask you to confirm. Click the rename button.

### Step 5: Done! ✅
GitHub automatically:
- Redirects old URLs to new location
- Updates all links
- Preserves all history, issues, and PRs

## After Rename

### Test It Works
1. Go to: https://github.com/fosterc1/adapt-fadetext (new URL)
2. Click the green "Code" button
3. Click "Download ZIP"
4. Extract the ZIP file
5. You should see a folder named `adapt-fadetext-main/` ✅
6. Upload to Adapt Authoring Tool
7. Success! ✅

### Update Local Repository (Optional)
If you have a local clone, update the remote URL:

```bash
cd /path/to/your/local/repo
git remote set-url origin https://github.com/fosterc1/adapt-fadetext.git
git fetch origin
```

Or just re-clone:
```bash
git clone https://github.com/fosterc1/adapt-fadetext.git
```

## What Changes

### Before Rename
```
Repository URL: https://github.com/fosterc1/adapt-quote
Download ZIP creates: adapt-quote-main/
Upload result: ❌ FAILS
```

### After Rename
```
Repository URL: https://github.com/fosterc1/adapt-fadetext
Download ZIP creates: adapt-fadetext-main/
Upload result: ✅ WORKS
```

## No Code Changes Needed!

The plugin code is perfect. Only the repository name needs to change.

All these files stay exactly the same:
- ✅ bower.json (already says "adapt-fadetext")
- ✅ package.json
- ✅ All JavaScript code
- ✅ All templates
- ✅ All styles
- ✅ Schema files
- ✅ Everything!

## Why This Works

The Adapt Authoring Tool checks:
1. Extract ZIP file
2. Look at first folder name inside
3. Read `bower.json` from that folder
4. **Check if folder name matches bower.json name**
5. If no match → Error ❌
6. If match → Continue validation ✅

By renaming the repository, GitHub's ZIP structure will match.

## GitHub's Behavior

When you download a ZIP from GitHub:
- **Repository name**: `adapt-fadetext`
- **Branch**: `main`
- **ZIP creates**: `adapt-fadetext-main/` folder ✅

This matches the plugin name in bower.json!

## Backward Compatibility

Don't worry! GitHub automatically:
- Redirects old links to new location
- Updates forks to point to renamed repo
- Preserves all stars, watchers, and issues
- Keeps all commit history

Anyone with the old URL will be redirected to the new one.

## FAQs

### Q: Will this break existing installations?
**A**: No! Installed plugins are not affected. This only affects new downloads.

### Q: Will old links still work?
**A**: Yes! GitHub redirects `adapt-quote` → `adapt-fadetext` automatically.

### Q: Do I need to update anything else?
**A**: Optionally update URLs in README.md, but the old ones will still work via redirect.

### Q: Will this affect version numbers?
**A**: No! Current version stays at 1.0.13. No need to increment.

### Q: What about production releases?
**A**: They already work! This fix is only for main branch downloads.

### Q: Can I undo it if needed?
**A**: Yes, you can rename it back (though there's no reason to).

## Documentation to Update (Optional)

After renaming, you may want to update these files to use the new URL:

1. `README.md` - Badge URLs and links
2. `bower.json` - Homepage URL (line 6)
3. `package.json` - Repository URL (if present)
4. Any documentation mentioning the repository URL

But this is optional since GitHub redirects automatically.

## Summary

**Action Required**: Rename repository from `adapt-quote` to `adapt-fadetext`  
**Time Required**: 30 seconds  
**Risk**: None (fully reversible, redirects automatic)  
**Benefit**: Main branch downloads will work immediately  
**Code Changes**: None needed!

---

**Ready?** Go to https://github.com/fosterc1/adapt-quote/settings and rename!

**Questions?** Check the other documentation files:
- `DIAGNOSIS.md` - Detailed technical analysis
- `SOLUTION_SUMMARY.md` - Full explanation with evidence
- `REPOSITORY_NAME_ISSUE.md` - Complete issue documentation
