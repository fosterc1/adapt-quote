# Quick Reference Card - Adapt Plugin Workflow

## ⚠️ CRITICAL: Always Increment Version!

Before EVERY push to ANY branch:
```bash
# Edit bower.json - increment version
# Edit package.json - increment version (must match)
```

## Standard Workflow

```bash
# 1. Create feature branch
git checkout -b fix/your-feature-name

# 2. Make your code changes

# 3. INCREMENT VERSION (CRITICAL!)
# Edit bower.json: "version": "1.0.X"
# Edit package.json: "version": "1.0.X"

# 4. Stage and commit
git add .
git commit -m "fix: description

- Increment version to 1.0.X
- Other changes..."

# 5. Push branch
git push -u origin fix/your-feature-name

# 6. Create PR
gh pr create --title "..." --body "..."

# 7. After approval, merge
gh pr merge <number> --squash
```

## Version Increment Rules

```
Patch (bug fix):      1.0.0 → 1.0.1
Minor (new feature):  1.0.1 → 1.1.0
Major (breaking):     1.1.0 → 2.0.0
```

## Pre-Commit Checklist

- [ ] Code changes complete
- [ ] bower.json version incremented
- [ ] package.json version incremented
- [ ] Both versions match
- [ ] Tested locally
- [ ] Documentation updated

## Files to Always Update

1. `bower.json` - version field
2. `package.json` - version field

## Common Commands

```bash
# Check current version
grep version bower.json
grep version package.json | head -1

# View PR status
gh pr list

# View specific PR
gh pr view <number>

# Check current branch
git branch

# Check git status
git status
```

## Links

- Repository: https://github.com/fosterc1/adapt-quote
- VERSION_POLICY.md - Full version documentation
- WORKFLOW_SUMMARY_WITH_VERSION.md - Complete workflow guide

---
**Remember:** Version increment is NOT optional! Plugin won't load without it!
