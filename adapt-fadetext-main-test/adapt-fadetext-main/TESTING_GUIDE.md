# 🧪 Schema Testing Guide - v1.0.10

**Release URL**: https://github.com/fosterc1/adapt-quote/releases/tag/v1.0.10

---

## 🎯 Goal

Identify which schema configuration works with Adapt Authoring Tool v5.53.3

---

## 📦 Four Test Versions Available

### **Test 1: adapt-fadetext-v1.0.6-clean.zip** ⭐
- **Status**: Previously worked (uploaded from sandbox)
- **Structure**: 
  - `properties.schema` (root)
  - `schema/component.schema.json` (singular folder)
- **Test First**: Confirm this still works

### **Test 2: adapt-fadetext-v1.0.8-no-schema-folder.zip**
- **Structure**: 
  - `properties.schema` (root)
  - NO schema folder at all
- **Purpose**: Test if `schema/` folder is causing issues

### **Test 3: adapt-fadetext-v1.0.10-schemas-plural.zip** 🆕
- **Structure**: 
  - `properties.schema` (root)
  - `schemas/component.schema.json` (PLURAL folder)
- **Purpose**: Test if folder name must be plural

### **Test 4: adapt-fadetext-v1.0.9-clean.zip**
- **Structure**: 
  - `properties.schema` (root)
  - `schema/component.schema.json` (singular folder)
- **Purpose**: Test if version number matters
- **Note**: Identical to v1.0.6 except version

---

## 📋 Testing Procedure

### Step 1: Download All Files
1. Go to: https://github.com/fosterc1/adapt-quote/releases/tag/v1.0.10
2. Download all 4 ZIP files to your computer

### Step 2: Test Each Version

For **EACH** file:

1. **Uninstall** any existing "Fade Text" plugin from Authoring Tool
2. **Go to**: Plugin Management → Upload Plugin
3. **Select**: The test ZIP file
4. **Click**: Upload
5. **Record result**:
   - ✅ Success: Plugin appears in available components
   - ❌ Failed: Note the exact error message

### Step 3: Report Results

Create a table like this:

| File | Result | Error Message (if failed) |
|------|--------|---------------------------|
| v1.0.6-clean.zip | ✅ or ❌ | (error if applicable) |
| v1.0.8-no-schema-folder.zip | ✅ or ❌ | (error if applicable) |
| v1.0.10-schemas-plural.zip | ✅ or ❌ | (error if applicable) |
| v1.0.9-clean.zip | ✅ or ❌ | (error if applicable) |

---

## 🔍 What We're Testing

### Hypothesis 1: Schema Folder Name
- Maybe it needs `schemas/` (plural) not `schema/` (singular)
- Framework v5 docs aren't clear on this

### Hypothesis 2: Schema Folder Not Needed
- Maybe only `properties.schema` is required
- The `schema/` folder might be causing conflicts

### Hypothesis 3: Version Number Issue
- Maybe there's something cached with v1.0.6
- v1.0.9 should work if it's truly identical

### Hypothesis 4: File Packaging Difference
- GitHub release upload might change ZIP structure
- The v1.0.6 from sandbox might be packaged differently

---

## 📊 Expected Outcomes

### If v1.0.6 works but v1.0.9 fails:
→ Version caching issue or GitHub packaging issue

### If no-schema-folder works:
→ The `schema/` folder is causing the error

### If schemas-plural works:
→ Folder name must be plural `schemas/` not `schema/`

### If none work:
→ Something changed in the Authoring Tool
→ Need to check server logs for detailed error

---

## ⚠️ Important Notes

1. **Always uninstall first** before each test
2. **Use downloaded files** from GitHub release (not "Download ZIP" button)
3. **Note exact error messages** - they provide clues
4. **Test in order** (1 → 2 → 3 → 4) for consistency

---

## 🆘 If All Tests Fail

If none of the 4 versions work:

1. **Check Authoring Tool version**: Confirm it's still v5.53.3
2. **Check server logs**: Look for detailed error messages
3. **Try different browser**: Clear cache or use incognito
4. **Verify v1.0.6 worked**: Make sure the original upload was successful

---

## 📁 File Structures (for reference)

```
v1.0.6-clean.zip:
adapt-fadetext/
├── bower.json (version: 1.0.6)
├── package.json
├── properties.schema
├── example.json
├── schema/
│   └── component.schema.json
├── js/
├── less/
├── templates/
└── example/

v1.0.8-no-schema-folder.zip:
adapt-fadetext/
├── bower.json (version: 1.0.8)
├── package.json
├── properties.schema
├── example.json
├── js/
├── less/
├── templates/
└── example/
(NO schema/ folder)

v1.0.10-schemas-plural.zip:
adapt-fadetext/
├── bower.json (version: 1.0.10)
├── package.json
├── properties.schema
├── example.json
├── schemas/          ← PLURAL
│   └── component.schema.json
├── js/
├── less/
├── templates/
└── example/

v1.0.9-clean.zip:
adapt-fadetext/
├── bower.json (version: 1.0.9)
├── package.json
├── properties.schema
├── example.json
├── schema/
│   └── component.schema.json
├── js/
├── less/
├── templates/
└── example/
```

---

**Ready to test!** Download all 4 files and start testing. Report back with results! 🚀
