# Version Policy for Adapt Plugin

## Critical Requirement ⚠️

**IMPORTANT:** The version number MUST be incremented in both `bower.json` AND `package.json` every time changes are pushed to ANY branch. Otherwise, the downloaded plugin will not load in Adapt Framework.

## Version Files to Update

1. **bower.json** - Line 3: `"version": "X.Y.Z"`
2. **package.json** - Line 3: `"version": "X.Y.Z"`

Both files must have the **same version number**.

## Semantic Versioning

We follow [Semantic Versioning](https://semver.org/) (SemVer): `MAJOR.MINOR.PATCH`

### When to Increment

#### MAJOR version (X.0.0)
- Breaking changes that are not backward compatible
- Major architectural changes
- Changes that require users to modify their content

**Example:** `2.0.0` - Changed component name or removed features

#### MINOR version (0.X.0)
- New features added in a backward-compatible manner
- New configuration options
- Enhancement to existing functionality

**Example:** `1.1.0` - Added new animation options

#### PATCH version (0.0.X)
- Bug fixes
- Documentation updates
- Small improvements
- Schema fixes
- Performance improvements

**Example:** `1.0.1` - Fixed schema upload error

## Workflow Integration

### Standard Workflow
```bash
# 1. Create feature branch
git checkout -b fix/your-fix-name

# 2. Make your changes to code/files

# 3. Update version numbers
# Edit bower.json - increment version
# Edit package.json - increment version (must match bower.json)

# 4. Stage all changes including version files
git add .

# 5. Commit with version in message
git commit -m "fix: description of fix

- Increment version to X.Y.Z
- Other changes..."

# 6. Push branch
git push -u origin fix/your-fix-name

# 7. Create PR
gh pr create --title "..." --body "..."
```

### Pre-Commit Checklist ✅

Before every commit that will be pushed:
- [ ] Updated version in `bower.json`
- [ ] Updated version in `package.json`
- [ ] Both versions match exactly
- [ ] Version follows semantic versioning rules
- [ ] Commit message mentions version increment

## Version History

### 1.0.1 (2025-11-13)
- Fixed plugin upload error: "Package does not contain a schema"
- Added `schema/` directory with `component.schema.json`
- Added `targetAttribute` to `bower.json`
- Added documentation files

### 1.0.0 (Initial Release)
- Initial plugin development
- Scroll-based text fade functionality
- Basic configuration options

## Automation (Future Enhancement)

Consider adding automated version bumping:

### Option 1: npm version command
```bash
npm version patch  # Increments patch version (0.0.X)
npm version minor  # Increments minor version (0.X.0)
npm version major  # Increments major version (X.0.0)
```

This automatically:
- Updates both package.json
- Creates a git commit
- Creates a git tag

Then manually update bower.json to match.

### Option 2: Pre-commit Hook
Create `.git/hooks/pre-commit` to verify versions are incremented:
```bash
#!/bin/bash
# Check if bower.json and package.json versions match
BOWER_VERSION=$(grep '"version"' bower.json | head -1 | sed 's/.*: "\(.*\)".*/\1/')
PACKAGE_VERSION=$(grep '"version"' package.json | head -1 | sed 's/.*: "\(.*\)".*/\1/')

if [ "$BOWER_VERSION" != "$PACKAGE_VERSION" ]; then
    echo "ERROR: Version mismatch!"
    echo "bower.json: $BOWER_VERSION"
    echo "package.json: $PACKAGE_VERSION"
    exit 1
fi
```

## Common Mistakes to Avoid

❌ **Don't:**
- Forget to update version numbers
- Update only one file (bower.json or package.json)
- Use different versions in the two files
- Skip version increment for "small" changes
- Reuse version numbers

✅ **Do:**
- Always increment version for ANY push
- Keep both files in sync
- Follow semantic versioning
- Document version changes
- Test plugin loading after version change

## Why This Matters

Adapt Framework uses the version number to:
1. Cache plugin files
2. Determine if updates are available
3. Manage plugin dependencies
4. Track installed plugin versions

If the version doesn't change, Adapt will use the cached version and your changes won't load!

## Quick Reference

```
Fix/Patch:     1.0.0 → 1.0.1
New Feature:   1.0.1 → 1.1.0
Breaking:      1.1.0 → 2.0.0
```

---
*Always increment, always sync, always document!*
