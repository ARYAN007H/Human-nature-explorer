# Content Guide: Writing Psychology Chapters

Guide for creating new psychology chapters following established patterns and standards.

## Overview

Each chapter is a self-contained unit explaining a psychological concept with:

- **Teaser** (1-2 sentences): Hook to draw readers
- **Description** (100-200 words): Accessible overview
- **Long Description** (500-1000 words): In-depth exploration
- **Key Concepts** (auto-extracted): 5 main ideas
- **Reflection Prompts** (3): Guided self-exploration with hints
- **Citations** (3-5): Peer-reviewed references with DOI
- **3D Visualization**: Chapter-specific geometric metaphor
- **Category**: Psychology discipline (neuroscience, social, cognitive, etc.)

---

## Chapter Structure

### 1. Chapter Metadata

```typescript
interface Chapter {
  // Unique identifier (snake_case, 20 chars max)
  id: string;

  // Display title (40 chars max, sentence case)
  title: string;

  // Psychology domain (for filtering)
  category:
    | "neuroscience"
    | "social"
    | "cognitive"
    | "developmental"
    | "clinical";

  // Brand color (hex, must meet WCAG AA on white 4.5:1+)
  color: string;

  // Hook for chapter card (50 chars max)
  teaser: string;

  // Brief intro (100-200 words, 3rd person)
  description: string;

  // Full exploration (500-1000 words, paragraph separated by \n\n)
  longDescription: string;

  // User self-reflection (3 prompts with hints)
  reflectionPrompts: {
    prompt: string;
    hint: string;
  }[];

  // Academic citations (3-5, peer-reviewed)
  citations: {
    author: string;
    year: number;
    title: string;
    journal?: string;
    doi?: string;
  }[];

  // Audio feature (false for MVP)
  audioReactive: boolean;
}
```

---

## Writing Guidelines

### Tone & Voice

✅ **Good:**

- Warm, curious, inviting
- Conversational but educated
- Empowering without judgment
- Example: "Our brains are constantly predicting what will happen next..."

❌ **Avoid:**

- Academic jargon (define if necessary)
- Clinical coldness ("patients exhibit...")
- Overly simplified ("just vibes")
- First person ("I feel that...")

### Teaser (1-2 sentences, 50 chars max)

Purpose: Intrigue without spoiling. Appear on chapter cards and category listing.

**Examples:**

- "Why we remember some things perfectly, and forget others entirely"
- "The hidden patterns shaping our decisions"
- "How our childhood shapes our closest relationships"

**Formula:**
`[Why/How] we [emotional trigger/paradox related to topic]`

### Description (100-200 words)

Purpose: Appetizer. Read before clicking into chapter.

**Structure:**

1. Opening hook (1 sentence) - Why this matters
2. What it is (2-3 sentences) - Basic definition
3. Why it matters (2-3 sentences) - Relevance to reader
4. Preview (1 sentence) - What you'll explore

**Example Template:**

> "Your memories are constantly being rewritten. Memory isn't a faithful video recorder—it's a creative artist, reshaping itself each time you recall it.
>
> Understanding how memory works reveals why eyewitness testimony fails, why your childhood feels different than your siblings', and how learning actually sticks in your brain. This isn't a flaw in your mind—it's a feature that lets us learn, adapt, and make sense of our messy lives.
>
> Explore the surprising science of memory reconstruction and how to work with your brain's natural learning style."

### Long Description (500-1000 words)

Purpose: Deep dive. Read by engaged users after initial interest.

**Structure:**

1. **Opening Story** (50-100 words) - Personal example or historical anecdote
2. **The Mechanism** (150-250 words) - How it works (break into paragraphs)
3. **Why It Evolved** (100-150 words) - Adaptive function
4. **Real-World Impact** (100-150 words) - Practical examples
5. **Misconceptions** (50-100 words) - What people get wrong
6. **Actionable Insight** (50-100 words) - What to do with this knowledge

**Paragraph Separation:** Separate distinct ideas with `\n\n`

**Example (Memory chapter):**

```typescript
longDescription: `You have a memory of your fifth birthday party. You remember 
the blue cake, your grandfather's laugh, the feeling of opening presents. 
Except—did you really experience all that? Or did you construct this memory 
from a photo, a story someone told you, and your imagination?

The surprising answer is: both. Memory is not a faithful recording but an 
ongoing reconstruction. Each time you retrieve a memory, your brain rebuilds 
it using available information: sensory details, emotional tags, narrative 
expectations, and contextual cues. This rebuilding is why eyewitness testimony 
is notoriously unreliable and why your childhood feels entirely different 
from your sibling's experience of the same events.

From an evolutionary perspective, this design makes perfect sense. A detailed 
video recording of every moment would require enormous storage and mental 
effort. Instead, your brain stores the gist—the meaningful pattern—and 
reconstructs details as needed. This lets you learn quickly, adapt to new 
situations, and focus mental energy on what matters now.

In school, this means cramming doesn't work because memories need time and 
repetition to consolidate. In relationships, it means disagreements about 
"what really happened" aren't about honesty—they're about different 
reconstructions from different perspectives. In aging, memory loss doesn't 
mean your wisdom disappears; it means you're relying on crystallized knowledge 
and patterns instead of specific details.

The misconception is that memory loss means your mind is failing. In reality, 
forgetting is often a feature—it lets you generalize, focus on meaning, and 
avoid getting stuck in unhelpful details.

Given this, the question becomes: how do we make memories stick? Spacing 
(reviewing over time), elaboration (connecting to what you know), emotion 
(attachment to feelings), and sleep (consolidation) are the levers that matter.`;
```

### Reflection Prompts (3, with hints)

Purpose: Personalize the learning. Users answer and save to localStorage.

**Guidelines:**

- Start with easier, more personal prompts (warm up)
- Progress to deeper, more challenging questions
- Make them open-ended (not yes/no)
- Provide hints for stuck readers (not answers)

**Structure:**

```typescript
reflectionPrompts: [
  {
    prompt:
      "Describe a memory you're uncertain about. Why might your brain have reconstructed it that way?",
    hint: "Think about where you might have gotten additional information—photos, stories, movies, assumptions about what 'should' have happened.",
  },
  {
    prompt:
      "How does knowing memory is reconstructed change how you approach disagreements with people about past events?",
    hint: "Consider that both people might be honestly remembering different reconstructions. What becomes possible when you assume good faith?",
  },
  {
    prompt:
      "Which is more important to you: accurate memory or meaningful memory? How do you decide when there's a trade-off?",
    hint: "Meaningful memories might fade details but preserve feeling. Accurate memories might feel cold. What serves you better in different situations?",
  },
];
```

### Citations (3-5, peer-reviewed)

Purpose: Academic credibility. Link to original research.

**Requirements:**

- Author's full last name(s) + first initial(s)
- Publication year
- Full research title
- Journal name (if applicable)
- DOI (Digital Object Identifier) for linking

**Source Standards:**

- ✅ Peer-reviewed journal articles
- ✅ Textbooks from university presses (Schachter, Kahneman, Bowlby)
- ✅ Meta-analyses and reviews
- ❌ Blog posts, Wikipedia
- ❌ Unreplicated studies
- ❌ Fringe theories

**Example Citations:**

```typescript
citations: [
  {
    author: "Schachter, D.L.",
    year: 2012,
    title: "Adaptive constructive processes and the future of memory",
    journal: "American Psychologist",
    doi: "10.1037/a0029869",
  },
  {
    author: "Ebbinghaus, H.",
    year: 1885,
    title: "Memory: A Contribution to Experimental Psychology",
    journal: "Dover Publications", // Book, not journal
  },
  {
    author: "Bjork, R.A., & Bjork, E.L.",
    year: 1992,
    title: "A new theory of disuse and an old theory of stimulus fluctuation",
    journal: "Learning & Motivation",
  },
];
```

**Finding DOIs:**

1. Google Scholar: https://scholar.google.com/ (search, click cite, look for DOI)
2. CrossRef: https://www.crossref.org/ (search by title/author)
3. Journal website (usually visible)

---

## Category & Color Selection

### Choosing a Category

| Category          | Focus                                | Examples                          |
| ----------------- | ------------------------------------ | --------------------------------- |
| **neuroscience**  | Brain mechanisms, neural circuits    | Emotions, Memory, Fear            |
| **social**        | Relationships, groups, society       | Social-Roles, Attachment, Empathy |
| **cognitive**     | Thinking, decision-making, reasoning | Biases, Motivation                |
| **developmental** | Growth, lifespan, change             | Attachment                        |
| **clinical**      | Mental health, disorders, therapy    | Fear, Memory                      |

**Note:** Chapters can span multiple categories. Choose the primary one.

### Choosing a Color

**Requirements:**

- Hex format: `#RRGGBB`
- WCAG AA contrast on white: ≥4.5:1
- Visually distinct from existing chapters
- Matches chapter emotion/theme
- Used for: card border, badges, accent elements

**Existing Colors (don't reuse):**

- Emotions: `#E8B4B8` (warm pink)
- Biases: `#F4A261` (warm orange)
- Social-Roles: `#2D3E50` (cool navy)
- Attachment: `#06A77D` (teal green)
- Motivation: `#C1121F` (deep red)
- Memory: `#1A1410` (near black)
- Fear: `#2D5F8D` (steel blue)
- Empathy: `#8B5CF6` (purple)

**Available Palette:**

- Warm: `#E8A87C`, `#D4846C`
- Cool: `#5A9BA5`, `#3E7C8A`, `#4A5F7A`
- Dark: `#2A2420`, `#3D3228`
- Jewel: `#9D4E6C` (mauve), `#7A3E4C` (burgundy)

**Verify Contrast:** https://webaim.org/resources/contrastchecker/

---

## 3D Visualization (Advanced)

Each chapter gets a unique 3D geometric metaphor in `src/components/3D/Scene.tsx`.

### Existing Visualizations

| Chapter      | Geometry                               | Meaning                            |
| ------------ | -------------------------------------- | ---------------------------------- |
| Emotions     | Pulsing icosahedron + orbiting spheres | Core feeling + radiating contagion |
| Biases       | Nested wireframe cubes                 | Layers of thinking, distortion     |
| Social-Roles | 6 spheres in circle                    | Multiple simultaneous roles        |
| Attachment   | 2 connected spheres + cylinder         | Bond between beings                |
| Motivation   | 4 ascending cubes                      | Progression, increasing intensity  |
| Memory       | Icosahedron + octahedron               | Complex reconstruction             |
| Fear         | 5 concentric spheres                   | Threat ripples outward             |
| Empathy      | 2 interlocking tori + sphere           | Mirror neuron interweaving         |

### Adding a New Visualization

1. **Choose a metaphor:** What shape represents this concept?

   - Linear → Cylinder, line
   - Cyclical → Torus, ring
   - Hierarchical → Pyramids, stacked
   - Distributed → Spheres, particles
   - Chaotic → Wireframes, complex polyhedra

2. **Add to Scene.tsx:**

   ```typescript
   // In the switch statement for chapter geometry
   case 'new_chapter_id':
     return (
       <>
         <mesh rotation={[0, rotation, 0]}>
           <boxGeometry args={[1, 1, 1]} />
           <meshStandardMaterial color={chapterColor} />
         </mesh>
         {/* Add additional geometries as needed */}
       </>
     );
   ```

3. **Add animation:** Rotate, pulse, orbit based on scroll/cursor
4. **Test:** Verify it renders and rotates smoothly

---

## Creating a New Chapter: Checklist

### Pre-Writing

- [ ] Decide topic and find 3-5 peer-reviewed sources
- [ ] Choose psychology category
- [ ] Select color and verify WCAG AA contrast
- [ ] Decide 3D metaphor (or use simpler geometry for MVP)

### Writing

- [ ] Teaser (1-2 sentences, compelling)
- [ ] Description (100-200 words, accessible intro)
- [ ] Long description (500-1000 words, deep dive)
- [ ] Spell-check and grammar
- [ ] Ensure tone is warm and accessible
- [ ] Read aloud to check flow

### Reflection Prompts

- [ ] 3 prompts written (personal → challenging progression)
- [ ] Hints provided for each (helpful without spoiling)
- [ ] Prompts are open-ended (not yes/no)
- [ ] Tested for clarity

### Citations

- [ ] 3-5 sources selected (peer-reviewed preferred)
- [ ] Full citations with DOI when possible
- [ ] Verified sources exist and are accessible
- [ ] DOIs tested (links work)

### Code

- [ ] Chapter added to `src/constants/chapters.ts`
- [ ] Chapter type matches `Chapter` interface
- [ ] All required fields present and filled
- [ ] No TypeScript errors
- [ ] 3D visualization added to Scene.tsx (if applicable)
- [ ] Color added to designTokens for consistency
- [ ] Tested on web (all routes work)
- [ ] Tested on mobile (responsive)

### Quality Assurance

- [ ] Read by 2+ people (clarity, tone)
- [ ] No anachronisms or outdated info
- [ ] Emotional tone consistent with site brand
- [ ] Teaser is genuinely intriguing
- [ ] No grammatical errors
- [ ] All links verified

---

## Example: Complete New Chapter

**Topic:** Mirror Neurons (covered under Empathy, but shown as example)

```typescript
{
  id: "mirror_neurons",
  title: "Mirror neurons and synchrony",
  category: "neuroscience",
  color: "#9D4E6C", // mauve
  teaser: "Why watching someone yawn makes you yawn—and what it says about how we understand each other.",
  description: `When you watch someone throw a ball, your brain activates the motor circuits for throwing—even though you're not moving. Mirror neurons are specialized brain cells that fire both when we act and when we observe others acting. This neural mirroring is the biological foundation of empathy, learning, and social understanding.

Mirror neurons were discovered in macaque monkeys in 1992 and later found in humans. They're primarily located in the premotor and parietal cortex. These neurons don't just represent movement—they represent intention, emotion, and pain, creating an automatic bridge between our inner experience and others' experiences.

Understanding mirror neurons reshapes how we think about empathy, learning, and social connection. It explains contagion (why yawning spreads, why mood is catching) and suggests why live interaction is different from video (embodied presence activates mirror neurons more).`,
  longDescription: `You watch someone touch a hot stove. They pull back, wincing. And without thinking, you feel a twinge of pain in your own hand. This neural resonance—where observing someone's action activates your own action circuits—is the work of mirror neurons.

Mirror neurons were discovered accidentally in 1992 when researcher Vittorio Gallese noticed that a macaque monkey's premotor neurons fired both when the monkey grasped a peanut and when it watched the researcher grasp a peanut. Further research found that humans have an even more developed mirror neuron system, with mirrors for motor actions, emotions, and even pain.

These neurons aren't just mimicry circuits. They're the neural substrate of understanding. When you watch someone reach for a cup, your mirror neurons simulate the reach, letting you grasp their goal and intention instantly. When you see someone in pain, your anterior insula (the emotional mirror region) activates, creating an automatic resonance with their suffering.

The mirror neuron system explains many phenomena: why yawning is contagious (motor mirroring), why you feel uncomfortable around someone's grief (emotional mirroring), why you naturally synchronize your movements with people you like (embodied bonding), why learning by observation works (motor simulation), and why live music feels different from recording (synchrony requires real-time interaction).

But mirror neurons don't work in isolation. They're modulated by attention, intention, and context. You don't automatically absorb everyone's emotions—you can choose to be moved or protected depending on your state. This is why meditation practitioners often speak of compassionate distance: you can mirror someone's pain while maintaining clear boundaries.

A common misconception is that mirror neurons mean we're all automatically empathetic. In reality, empathy is a choice we make in relationship to our mirroring circuits. Some people with autism have different mirror systems but deep empathy through effort. Some with high mirror activity struggle with emotional boundaries and can burn out.

The deeper insight is that our minds aren't isolated. They're coupled—literally synchronized at the neural level when we're in genuine connection with others. This is why quality time matters more than quantity, why presence is a gift, and why authentic relationship requires both mirror activation and conscious choice.`,
  reflectionPrompts: [
    {
      prompt: "When do you feel most synchronized with another person? What changes in your body and attention?",
      hint: "Think of moments when conversation flows effortlessly, or when you feel completely 'seen' by someone. What were you doing together?"
    },
    {
      prompt: "How do you distinguish between truly resonating with someone's emotion and simply absorbing their mood? What's the difference?",
      hint: "Resonance might involve understanding + choice. Absorption might feel passive, like being swept along. When do you feel each way?"
    },
    {
      prompt: "How might understanding mirror neurons change how you approach someone who seems emotionally unavailable or defended?",
      hint: "They might have different mirror activation, or they might be protecting their system. How does seeing this as neutral change your approach?"
    }
  ],
  citations: [
    {
      author: "Gallese, V., Fadiga, L., Fogassi, L., & Rizzolatti, G.",
      year: 1996,
      title: "Action recognition in the premotor cortex",
      journal: "Brain",
      doi: "10.1093/brain/119.2.593"
    },
    {
      author: "Iacoboni, M., et al.",
      year: 1999,
      title: "Learning to speak by imitate",
      journal: "Science"
    },
    {
      author: "Singer, T., & Lamm, C.",
      year: 2009,
      title: "The social neuroscience of empathy",
      journal: "Annals of the New York Academy of Sciences",
      doi: "10.1111/j.1749-6632.2009.04418.x"
    }
  ],
  audioReactive: false
}
```

---

## Common Mistakes to Avoid

| Mistake                       | Why It's Wrong               | Fix                                                  |
| ----------------------------- | ---------------------------- | ---------------------------------------------------- |
| Jargon without definition     | Loses readers                | Define terms in parentheses or restructure sentences |
| First-person voice            | Breaks from established tone | Use "we" or "you" instead of "I"                     |
| Too brief                     | Doesn't explore enough depth | Expand to 500-1000 word min                          |
| Unsourced claims              | Loses credibility            | Add citations with DOI                               |
| Color not WCAG AA             | Fails accessibility          | Test contrast, pick different color                  |
| Reflection prompts too yes/no | Limits meaningful responses  | Rewrite to open-ended                                |
| Random 3D shape               | Doesn't convey meaning       | Choose shape that metaphorically fits                |
| Outdated psychology           | Embarrassing later           | Verify sources from last 10-15 years                 |
| No connection to reader       | Feels academic and distant   | Include practical examples and relatable language    |

---

## Resources

### Finding Research

- **PubMed Central:** https://www.ncbi.nlm.nih.gov/pmc/ (free access)
- **Google Scholar:** https://scholar.google.com/
- **ResearchGate:** https://www.researchgate.net/ (researchers often share)
- **University library:** If you have access

### Key Psychology Authors

- **Dan Siegel** (neuroscience, attachment, integration)
- **Carol Dweck** (growth mindset, motivation)
- **Daniel Kahneman** (decision-making, biases)
- **John Bowlby** (attachment)
- **Paul Ekman** (emotions)
- **William James** (consciousness, emotion)
- **Clara Barton** (history of psychology)
- **James Clear** (habit formation based on psychology)

### Writing Tools

- **Hemingway Editor:** https://hemingwayapp.com/ (simplify prose)
- **Grammarly:** https://www.grammarly.com/ (catch errors)
- **Readable:** https://readable.com/ (readability score)

---

## Publishing New Chapter

1. **Add to chapters.ts** - Update export
2. **Add to navigation** - If not auto-discovered
3. **Add 3D visualization** - Scene.tsx
4. **Test routes** - `/chapter/new_chapter_id`
5. **Deploy** - Push to production
6. **Announce** - Social media, newsletter (if applicable)

---

**Last Updated:** November 2025  
**Version:** 1.0.0  
**Total Words in 8 Chapters:** 2000+  
**Accessibility Level:** WCAG AA
