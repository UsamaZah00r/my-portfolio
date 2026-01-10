# Profile Picture Setup Instructions

## 📸 Adding Your Profile Picture

Your portfolio now includes a professional profile picture section in the Hero component. Follow these steps to add your own photo:

### Step 1: Prepare Your Photo
1. **Choose a professional photo** - Headshot or professional portrait works best
2. **Recommended specifications:**
   - **Size**: 400x400 pixels or larger (square format)
   - **Format**: JPG, PNG, or WebP
   - **Quality**: High resolution for crisp display
   - **Background**: Professional or clean background preferred

### Step 2: Add Your Photo to the Project
1. **Save your photo** as `profile.jpg` (or `profile.png`)
2. **Place it in**: `public/assets/images/profile.jpg`
3. **File path should be**: `public/assets/images/profile.jpg`

### Step 3: Update the Image (Optional)
If you want to use a different filename or format:
1. **Open**: `src/components/Hero.jsx`
2. **Find line**: `src="/assets/images/profile.jpg"`
3. **Change to**: `src="/assets/images/your-filename.jpg"`

### Current Fallback
- If no image is found, it automatically shows a **generated avatar** with your initials
- The fallback uses: `https://ui-avatars.com/api/?name=Usama+Zahoor&size=400&background=1e293b&color=ffffff&bold=true&format=png`

### Profile Picture Features
✅ **Animated gradient border** - Rotating colorful border  
✅ **Hover effects** - Subtle scale animation on hover  
✅ **Status indicator** - Green dot showing "Available for opportunities"  
✅ **Floating tech icons** - React and Node.js icons around the picture  
✅ **Responsive design** - Looks great on all device sizes  
✅ **Automatic fallback** - Shows initials if image fails to load  

### Professional Tips
- **Lighting**: Use good lighting, avoid shadows on face
- **Expression**: Friendly, professional smile
- **Attire**: Professional or business casual clothing
- **Crop**: Focus on head and shoulders
- **Quality**: Use high resolution for sharp display

### File Structure
```
public/
├── assets/
│   └── images/
│       └── profile.jpg  ← Place your photo here
```

### Testing
1. **Add your photo** to the correct location
2. **Refresh the browser** at `http://localhost:3000/`
3. **Check the Hero section** - your photo should appear with animations
4. **Test responsiveness** - resize browser to see mobile view

Your professional profile picture will now be prominently displayed with beautiful animations and effects! 🎉