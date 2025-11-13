---
layout: blog-post
title: "My First Blog Post"
subtitle: "An introduction to our robotics team's blog"
date: 2025-11-12
author: "Team 5596"
excerpt: "Welcome to the Wolverine Robotics blog! This is our first post where we introduce our team and share what we're working on."
---

## Welcome to Our Blog!

This is an example blog post for **Wolverine Robotics Team 5596**. We're excited to share our journey, experiences, and technical insights with the robotics community.

### What We'll Be Sharing

- Competition updates and results
- Technical tutorials and build logs
- Team events and community outreach
- Behind-the-scenes looks at our robot development

### Our Robot This Season

We've been hard at work designing and building our competition robot. Here are some highlights:

1. **Drive System**: We implemented a swerve drive for maximum maneuverability
2. **Intake Mechanism**: Custom-designed to handle game pieces efficiently
3. **Autonomous Programming**: Utilizing computer vision and path planning

### Including Images

You can add images from your blog's assets folder like this:

![Example Image]({{ '/blog/my-first-blog/assets/example-image.jpg' | relative_url }})

Here's another example with a team photo:

![Team Photo]({{ '/blog/my-first-blog/assets/team-photo.jpg' | relative_url }})

*Note: In production, replace these placeholder images with your actual photos!*

### Code Examples

Here's a sample of our autonomous code:

```java
public void autonomousInit() {
    // Initialize autonomous mode
    robot.resetSensors();
    pathPlanner.loadPath("auto-path-1");
}

public void autonomousPeriodic() {
    // Run autonomous commands
    pathPlanner.followPath();
}
```

### Conclusion

Stay tuned for more updates as we progress through the season. Follow us on social media and check back here regularly for new content!

---

*Posted by {{ page.author }} on {{ page.date | date: "%B %d, %Y" }}*
