# 🎯 What To Download - Simple Guide

## ✅ WORKING: v1.0.12 Release (Confirmed Working)

**Download from**: https://github.com/fosterc1/adapt-fadetext/releases/tag/v1.0.12

**File**: `adapt-fadetext-v1.0.12-production.zip`

**This works!** ✅ You confirmed this uploads successfully.

## ❌ DOESN'T WORK: Main Branch ZIP

**Don't use**: https://github.com/fosterc1/adapt-fadetext → "Code" → "Download ZIP"

**Problem**: Creates `adapt-fadetext-main/` folder (has `-main` suffix)

**Result**: Upload fails ❌

## 🆕 NEW: v1.0.14 Release (Should Work)

**File location**: `/home/user/webapp/adapt-fadetext-v1.0.14-production.zip`

**Differences from v1.0.12**:
1. Version number: 1.0.14 (instead of 1.0.12)
2. Homepage URL: Updated to `adapt-fadetext` (instead of `adapt-quote`)
3. Added LICENSE file
4. Added package-lock.json

**Everything else is identical** to v1.0.12.

## Comparison

| Aspect | v1.0.12 | v1.0.14 | Identical? |
|--------|---------|---------|------------|
| Folder name | `adapt-fadetext/` | `adapt-fadetext/` | ✅ Yes |
| bower.json name | `adapt-fadetext` | `adapt-fadetext` | ✅ Yes |
| Version | 1.0.12 | 1.0.14 | Different |
| Homepage URL | `adapt-quote` | `adapt-fadetext` | Different |
| Schema folder | `schemas/` | `schemas/` | ✅ Yes |
| Schema content | (content) | (content) | ✅ Identical |
| properties.schema | Present | Present | ✅ Identical |
| JavaScript files | Present | Present | ✅ Identical |
| Templates | Present | Present | ✅ Identical |
| Styles | Present | Present | ✅ Identical |
| LICENSE | Missing | Present | Different |
| package-lock.json | Missing | Present | Different |

## Question For You

**What are you currently trying to upload that's failing?**

A) v1.0.14 from my production ZIP?
B) Something downloaded from the main branch?
C) Something else?

If v1.0.12 works, then v1.0.14 should also work since they're structurally identical (only version number and URL differ).

## Recommendation

**Keep using v1.0.12** if it's working! The repository rename didn't break it.

The issue is ONLY with downloading from the main branch "Download ZIP" button, which creates the wrong folder structure.

## For Your Information

The v1.0.14 production ZIP I created is located at:
```
/home/user/webapp/adapt-fadetext-v1.0.14-production.zip
```

It has the exact same structure as v1.0.12 (just different version number).

---

**Summary**: If v1.0.12 release works, keep using it! The main branch download is what doesn't work.
