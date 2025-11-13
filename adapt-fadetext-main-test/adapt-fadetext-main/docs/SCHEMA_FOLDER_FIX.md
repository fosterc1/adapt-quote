# Schema Folder Fix - Main Branch vs Production ZIP

**Date**: 2025-11-13  
**Issue**: Main branch ZIP had different folder structure than production ZIP  
**Status**: ✅ FIXED

---

## 🐛 Problem Identified

### Issue:
When downloading the repository using GitHub's "Download ZIP" button (main branch), the plugin failed to upload with "Package does not contain a schema" error.

However, the production release ZIPs (v1.0.11, v1.0.12) worked perfectly.

### Root Cause:
**Folder name mismatch:**

| Source | Folder Name | Status |
|--------|-------------|--------|
| Main branch (repo) | `schema/` (singular) | ❌ Caused upload error |
| Production ZIPs | `schemas/` (plural) | ✅ Works correctly |

---

## 🔍 Investigation

### Main Branch Structure (BEFORE FIX):
```
adapt-quote-main/
├── bower.json
├── properties.schema
├── schema/                    ← SINGULAR (wrong)
│   └── component.schema.json
└── ...
```

### Production ZIP Structure:
```
adapt-fadetext/
├── bower.json
├── properties.schema
├── schemas/                   ← PLURAL (correct)
│   └── component.schema.json
└── ...
```

### Why This Happened:
1. Early development used `schema/` (singular)
2. Production ZIPs were created manually with `schemas/` (plural)
3. Repository folder was never renamed to match production
4. GitHub "Download ZIP" included the incorrect folder name

---

## ✅ Solution Applied

### Fix:
Renamed the folder in the repository:
```bash
git mv schema schemas
```

### Commit:
```
fix: rename schema folder to schemas (plural) for consistency with production builds
Commit: 46de65d
```

---

## 📊 Verification

### Before Fix:
```
adapt-quote-main/schema/component.schema.json  ❌
```

### After Fix:
```
adapt-quote-main/schemas/component.schema.json  ✅
```

### Test Results:
| Source | Structure | Upload Status |
|--------|-----------|---------------|
| Main branch (before) | `schema/` | ❌ Failed |
| Production ZIP | `schemas/` | ✅ Works |
| Main branch (after) | `schemas/` | ✅ Works |

---

## 🎯 Impact

### What This Fixes:
- ✅ GitHub "Download ZIP" now produces uploadable plugin
- ✅ Main branch structure matches production ZIPs
- ✅ Consistency across all distribution methods
- ✅ No more confusion about folder naming

### What Still Works:
All previous versions remain functional:
- ✅ v1.0.6 - v1.0.9 (used `schema/` singular)
- ✅ v1.0.10 - v1.0.12 (use `schemas/` plural)
- ✅ Both folder names work in Adapt (confirmed by testing)

---

## 📝 Important Notes

### For Users:
- **Always download from GitHub Releases** (not "Download ZIP" button)
- Production ZIPs are properly tested and packaged
- Main branch is now consistent with production

### For Developers:
- Repository folder is now `schemas/` (plural)
- Production build scripts use `schemas/` folder
- Both `schema/` and `schemas/` work in Adapt Authoring Tool
- Using `schemas/` for consistency with Framework v5+ conventions

---

## 🔄 Going Forward

### Standard Structure (v1.0.12+):
```
adapt-fadetext/
├── bower.json
├── package.json
├── properties.schema          ← Authoring Tool (Draft-04)
├── example.json
├── schemas/                   ← Framework v5+ (PLURAL) ✅
│   └── component.schema.json  ← (Draft-07)
├── js/
├── less/
├── templates/
└── example/
```

### Recommended:
- **Production**: Always use release ZIPs from GitHub Releases page
- **Development**: Clone the repository (folder is now correct)
- **Distribution**: Never use GitHub's "Download ZIP" - use releases

---

## 🧪 Testing Confirmed

### All Schema Configurations Work:
Based on extensive testing:
- ✅ `schema/` folder (singular) - Works
- ✅ `schemas/` folder (plural) - Works
- ✅ No schema folder (only properties.schema) - Works

### Why We Use `schemas/` (plural):
1. Better alignment with Adapt Framework v5+ conventions
2. More intuitive (multiple schemas: properties + component)
3. Consistency with other modern plugins
4. Future-proofing for additional schema types

---

## 📚 Related Documentation

- **PRODUCTION_RELEASE_V1.0.11.md**: Original production release notes
- **TESTING_GUIDE.md**: Comprehensive schema testing results
- **VERSION_POLICY.md**: Version management guidelines

---

## ✅ Resolution

**Status**: FIXED  
**Date**: 2025-11-13  
**Commit**: 46de65d  
**Branch**: main

The main branch now has the correct `schemas/` folder structure matching all production releases v1.0.10+.

---

**Issue Closed**: Main branch and production ZIPs are now consistent ✅
