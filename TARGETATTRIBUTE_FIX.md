# targetAttribute Fix - Version 1.0.6

## 🎯 The Issue

**Error:** "There is a plugin already installed with a target attribute of '_component'"

### Root Cause:
We were using `"targetAttribute": "_component"` which is **too generic**!

The `targetAttribute` field must be **unique and specific** to your component, not a generic value.

---

## 🔍 Discovery

Checked official Adapt components:

| Component | targetAttribute | Pattern |
|-----------|----------------|---------|
| adapt-contrib-text | `"_text"` | Matches component name |
| adapt-contrib-accordion | `"_accordion"` | Matches component name |
| **Our plugin (wrong)** | `"_component"` | ❌ Generic! |
| **Our plugin (correct)** | `"_fadetext"` | ✅ Matches component name |

---

## ✅ The Fix

Changed in `bower.json`:

```json
// BEFORE (Wrong):
{
  "component": "fadetext",
  "targetAttribute": "_component"   // ❌ Too generic
}

// AFTER (Correct):
{
  "component": "fadetext",
  "targetAttribute": "_fadetext"    // ✅ Unique & specific
}
```

---

## 📦 New Clean ZIP

**File:** `/home/user/webapp/adapt-fadetext-v1.0.6-clean.zip`  
**Version:** 1.0.6  
**Size:** 13KB

**Changes:**
- ✅ `targetAttribute`: `"_component"` → `"_fadetext"`
- ✅ Version incremented: 1.0.5 → 1.0.6

---

## 📥 Upload Instructions

1. **Download:** `/home/user/webapp/adapt-fadetext-v1.0.6-clean.zip`
2. **Log in** as Super Admin to Adapt Authoring Tool
3. **Go to** Plugin Management
4. **Click** "Upload Plugin"
5. **Select** the v1.0.6 clean ZIP
6. **Upload**

**Expected Result:**
- ✅ No "targetAttribute conflict" error
- ✅ Upload succeeds
- ✅ Plugin appears in component library

---

## 🎓 What We Learned

### targetAttribute Rules:
1. Must be **unique** across all installed plugins
2. Should match the **component name** with underscore prefix
3. Format: `"_{component-name}"`
4. Examples:
   - Component "text" → `"_text"`
   - Component "accordion" → `"_accordion"`
   - Component "fadetext" → `"_fadetext"`

### Why It Matters:
- The Authoring Tool uses `targetAttribute` to identify and differentiate components
- Multiple plugins with the same `targetAttribute` would conflict
- Generic values like `"_component"` would prevent any other component from being installed

---

## 📊 Error Evolution

| Attempt | Error | Cause | Fix |
|---------|-------|-------|-----|
| 1 | "Package does not contain a schema" | Missing schema/ directory | Added schema/component.schema.json |
| 2 | "Cannot find bower.json" | ZIP structure wrong | Created clean ZIP |
| 3 | "targetAttribute '_component' conflict" | Generic targetAttribute | Changed to "_fadetext" |

**Progress:** Each error gave us more specific information! ✅

---

## 🔗 References

- **Official Components:** https://github.com/adaptlearning/adapt-contrib-text
- **targetAttribute Pattern:** `_{component-name}`
- **Commit:** df53905

---

## ✅ Current Status

**Version:** 1.0.6  
**targetAttribute:** `"_fadetext"` ✅  
**Clean ZIP:** Ready for upload  
**Expected:** This should work now!

---

**Try uploading v1.0.6!** The targetAttribute is now unique and follows the official pattern. 🚀
