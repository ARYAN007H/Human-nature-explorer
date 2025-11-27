/**
 * Chapter Definitions & Content
 * 8 Interactive Psychology Chapters with Full Content & Citations
 * Each chapter includes title, description, reflection prompts, and 3D configuration
 */

export interface Citation {
  title: string;
  author: string;
  year: number;
  doi?: string;
  url?: string;
}

export interface ReflectionPrompt {
  question: string;
  hint?: string;
}

export interface Subtopic {
  id: string;
  title: string;
  summary?: string;
  content: string;
  examples?: string[];
  svg?: string; // inline SVG string or identifier for an illustration
  recommendedNext?: string[]; // array of chapter/subtopic ids
}

export interface Chapter {
  id: string;
  title: string;
  teaser: string;
  category: string;
  order: number;
  color: string;
  description: string;
  longDescription: string;
  reflectionPrompts: ReflectionPrompt[];
  citations: Citation[];
  icon?: string;
  themeColor?: string;
  audioReactive?: boolean;
  subtopics?: Subtopic[];
}

export const chapters: Chapter[] = [
  {
    id: "emotions",
    title: "Emotions & Feelings",
    teaser: "Why we feel what we feel",
    category: "Psychology",
    order: 1,
    color: "#E8B4B8",
    themeColor: "from-pink-400 to-rose-400",
    description:
      "Emotions are the body's signal system. They emerge from the amygdala and spread outward to influence your thoughts, body, and choices.",
    longDescription: `Emotions are not weaknesses—they're ancient survival mechanisms that evolved to help us navigate complex social and physical worlds. When you feel fear, your amygdala floods your body with adrenaline, preparing muscles for flight. When you feel joy, your brain releases dopamine, strengthening neural pathways associated with that pleasurable stimulus.

The emotional brain (limbic system) processes information 400 times faster than the rational brain. This is why you can "feel" danger before you consciously understand it. Emotions are also contagious—mirror neurons in your brain automatically sync with others' emotional states, which is why one person's anxiety can ripple through a group.

Understanding your emotions isn't about controlling them; it's about listening to what they're telling you. Fear signals threat. Anger signals boundary violation. Sadness signals loss. These are valuable data points.`,
    reflectionPrompts: [
      {
        question:
          "What emotion did you feel most intensely this week? What was it trying to tell you?",
        hint: "Consider what need or boundary might be linked to this feeling.",
      },
      {
        question:
          "How do you typically respond when someone near you is anxious? Does their mood shift yours?",
        hint: "Think about mirror neurons and emotional contagion.",
      },
      {
        question:
          "What emotion have you learned to suppress? What might happen if you let yourself feel it fully?",
        hint: "Suppressing emotions takes cognitive energy and often intensifies them.",
      },
    ],
    citations: [
      {
        title: "Emotional Intelligence: Why It Can Matter More Than IQ",
        author: "Daniel Goleman",
        year: 1995,
      },
      {
        title: "The Neuroscience of Emotion",
        author: "Richard Lane & Lynn Nadel",
        year: 2000,
        doi: "10.1093/acprof:oso/9780195189872.001.0001",
      },
      {
        title: "Mirror Neurons and the Simulation Theory of Mind-Reading",
        author: "Vittorio Gallese & Alvin Goldman",
        year: 1998,
      },
    ],
    audioReactive: true,
    subtopics: [
      {
        id: "emotion-regulation",
        title: "Emotion Regulation",
        summary: "How we modulate and work with strong feelings.",
        content: `Emotion regulation refers to the processes by which we influence which emotions we have, when we have them, and how we experience and express them. Strategies include cognitive reappraisal (changing the way we think about a situation), expressive suppression (inhibiting outward signs of emotion), and situation selection (choosing to enter or avoid situations).`,
        examples: [
          "Reframing a criticism as useful feedback",
          "Using deep breathing to down-regulate acute anxiety"
        ],
        svg: "<svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='40' fill='%23E8B4B8'/><path d='M30 60 Q50 80 70 60' stroke='%23fff' stroke-width='4' fill='none'/></svg>",
        recommendedNext: ["attachment", "motivation"]
      },
      {
        id: "emotion-contagion",
        title: "Emotional Contagion",
        summary: "Why other people's feelings affect us.",
        content: `Emotional contagion is the automatic mimicry and synchronization of expressions, vocalizations, postures, and movements with those of another person. Mirror neurons and social feedback loops underlie this phenomenon.`,
        examples: ["Feeling calmer when a friend is calm", "Catching laughter in a room"],
        svg: "",
        recommendedNext: ["empathy"]
      }
    ],
  },

  {
    id: "biases",
    title: "Cognitive Biases",
    teaser: "Shortcuts that fool our brains",
    category: "Cognition",
    order: 2,
    color: "#F4A261",
    themeColor: "from-amber-400 to-orange-400",
    description:
      "Your brain is a prediction machine running on shortcuts. These mental hacks evolved to save energy but often lead us astray.",
    longDescription: `Cognitive biases are systematic patterns in how we think—mental shortcuts our brains use to process information quickly. They evolved because decision-making is energy-expensive. Your brain would rather make a "good enough" decision fast than a perfect decision slowly.

Confirmation bias makes us seek information that confirms what we already believe. Anchoring bias makes the first number we hear disproportionately influence our judgment. The availability heuristic makes us overestimate the likelihood of events we recently heard about.

These biases aren't flaws to shame ourselves about—they're features, not bugs. They helped our ancestors survive. But in a world of overwhelming information and complex decisions, they can mislead us. The key is awareness: knowing your biases doesn't eliminate them, but it helps you pause and check your thinking.

Some of the most common biases:
- Confirmation bias: seeking evidence that confirms existing beliefs
- Anchoring: overweighting the first piece of information
- Recency bias: overweighting recent events
- Fundamental attribution error: blaming personality for others' behavior, situations for our own
- Dunning-Kruger: overestimating our knowledge when we know little`,
    reflectionPrompts: [
      {
        question:
          "Which cognitive bias do you think affects your decisions most? Can you think of a recent example?",
        hint: "Consider a decision where you later realized you were wrong.",
      },
      {
        question: "How might confirmation bias prevent you from learning something new?",
        hint: "Think about what sources you tend to trust.",
      },
      {
        question:
          "If you know about these biases, why is it so hard to avoid them?",
        hint: "Self-awareness doesn't automatically change our automatic thinking.",
      },
    ],
    citations: [
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        year: 2011,
      },
      {
        title: "Cognitive Biases Potentially Affecting Judgment in Global Warming Science",
        author: "Robyn Burgess & David A. Stern",
        year: 2005,
      },
      {
        title: "The Cognitive Psychology of Belief",
        author: "Oswald & Grosjean",
        year: 2004,
      },
    ],
    audioReactive: false,
    subtopics: [
      {
        id: "confirmation-bias",
        title: "Confirmation Bias",
        summary: "Tendency to seek confirming evidence.",
        content: `Confirmation bias is the tendency to search for, interpret, favor, and recall information in a way that confirms one's preexisting beliefs or hypotheses. It operates across perception, memory, and reasoning.`,
        examples: ["Only reading news sources that align with your views"],
        svg: "",
        recommendedNext: ["memory"]
      },
      {
        id: "anchoring",
        title: "Anchoring & Framing",
        summary: "How initial information shapes decisions.",
        content: `Anchoring occurs when people rely too heavily on the first piece of information offered (the "anchor") when making decisions. Subsequent judgments are made by adjusting away from that anchor, often insufficiently.`,
        examples: ["First price you see in a sale shapes perceived value"],
        svg: "",
        recommendedNext: ["motivation"]
      }
    ],
  },

  

  {
    id: "social-roles",
    title: "Social Roles",
    teaser: "The scripts we play",
    category: "Social",
    order: 3,
    color: "#2D3E50",
    themeColor: "from-slate-600 to-slate-800",
    description:
      "We are all actors on multiple stages. Parent. Professional. Friend. Each role carries expectations—scripts we internalize.",
    longDescription: `From the moment you enter a room, your brain assesses the social context and switches into a corresponding "role." You behave differently with your parents than with your friends, differently in a job interview than at a casual party. This isn't insincerity—it's healthy adaptation.

Social roles are scripts that society writes but that we internalize. They tell us what to wear, how to speak, what emotions to show or hide, what to aspire to. Some roles liberate us (they give us identity and belonging). Others constrain us (they silence parts of ourselves).

The challenge is recognizing when a role is serving you and when it's limiting you. Many people spend their lives playing roles others wrote for them—the "good daughter," the "serious professional," the "strong one"—only to realize decades later that these scripts kept them from their own authentic expression.

Role strain happens when we hold conflicting roles (being both a nurturing parent and an ambitious professional, for example). Role conflict happens when the expectations of one role clash with another. Awareness helps: noticing which roles you're playing and whether you chose them or inherited them is the first step to freedom.`,
    reflectionPrompts: [
      {
        question:
          "What social roles do you play regularly? How different is your behavior in each one?",
        hint: "Think about at least 3-5 different contexts (home, work, friends, etc.).",
      },
      {
        question:
          "Is there a role you've outgrown but still feel pressure to perform? What would change if you let it go?",
        hint: "Consider roles your family, culture, or peer group expects of you.",
      },
      {
        question: "Which of your roles feels most authentic to you? What makes that one different?",
        hint: "Authenticity often comes when roles align with your values.",
      },
    ],
    citations: [
      {
        title: "The Presentation of Self in Everyday Life",
        author: "Erving Goffman",
        year: 1959,
      },
      {
        title: "Role Theory: Concepts and Research",
        author: "Bruce J. Biddle",
        year: 1986,
      },
      {
        title: "Identity and the Life Cycle",
        author: "Erik H. Erikson",
        year: 1980,
      },
    ],
    subtopics: [
      {
        id: "role-strain",
        title: "Role Strain & Conflict",
        summary: "When roles pull us in different directions.",
        content: `Role strain occurs when a single role demands too much of an individual. Role conflict occurs when two roles impose incompatible demands. Both are common in modern life and explain many everyday tensions.`,
        examples: ["Parent vs. professional time conflicts", "Friendship expectations vs. work obligations"],
        svg: "",
        recommendedNext: ["attachment"]
      }
    ],
    audioReactive: false,
  },

  {
    id: "attachment",
    title: "Attachment & Relationships",
    teaser: "Why we bond and depend",
    category: "Development",
    order: 4,
    color: "#06A77D",
    themeColor: "from-teal-400 to-emerald-400",
    description:
      "From birth, we are wired for connection. Attachment is not weakness—it's survival.",
    longDescription: `Attachment is not a phase of childhood to outgrow; it's a fundamental human need that shapes how you love, trust, and relate throughout your life. Secure attachment—the sense that someone will be reliably available and responsive to your needs—is one of the most powerful predictors of psychological health, resilience, and relationship quality.

Babies who were neglected—even if physically fed—failed to thrive. Their brains were literally smaller. This tells us something profound: love isn't a luxury; it's a nutrient. Our brains are designed to develop through connection.

As we grow, we internalize attachment patterns. If caregivers were consistently responsive, we learn to trust. If they were unreliable or rejecting, we learn to be hypervigilant or avoidant. These patterns, formed early, become implicit in how we relate to others.

The good news: attachment patterns aren't destiny. They can shift through earned secure attachment—through relationships with people who are present, consistent, and attuned to our needs. Therapy, deep friendships, and self-compassion can all help us grow from insecure toward more secure attachment.

Attachment styles:
- Secure: comfortable with intimacy and independence
- Anxious: fears abandonment, seeks reassurance
- Avoidant: uncomfortable with intimacy, values independence over connection
- Disorganized: a mix of anxious and avoidant, often emerging from trauma`,
    reflectionPrompts: [
      {
        question:
          "How did your early relationships teach you to expect others to treat you?",
        hint: "Notice your reflexive reactions in new relationships.",
      },
      {
        question:
          "Do you tend toward anxious or avoidant patterns in close relationships? What triggers each one?",
        hint: "Anxious partners often fear abandonment; avoidant partners fear engulfment.",
      },
      {
        question:
          "What relationships in your life feel most secure? What makes them different?",
        hint: "Look for consistency, attunement, and reliability.",
      },
    ],
    citations: [
      {
        title: "Attachment and Loss (Vol. 1): Attachment",
        author: "John Bowlby",
        year: 1969,
      },
      {
        title: "Secure Base: Parent-Child Attachment and Healthy Human Development",
        author: "John Bowlby",
        year: 1988,
      },
      {
        title: "Attached: The New Science of Adult Attachment",
        author: "Amir Levine & Rachel Heller",
        year: 2010,
      },
    ],
    subtopics: [
      {
        id: "secure-base",
        title: "Secure Base",
        summary: "How reliable relationships shape development.",
        content: `A secure base is the dependable presence of a caregiver or close other that allows exploration and learning. It supports risk-taking, exploration, and healthy regulation across the lifespan.`,
        examples: ["Consistent responses from a caregiver", "A partner who reassures during stress"],
        svg: "",
        recommendedNext: ["attachment"]
      },
      {
        id: "earned-secure",
        title: "Earned Secure Attachment",
        summary: "How patterns can change in adulthood.",
        content: `Earned secure attachment refers to people who move from insecure early relationships toward secure patterns through corrective experiences, therapy, or supportive relationships later in life.`,
        examples: ["Therapy leading to more secure relationships", "A new supportive partner"],
        svg: "",
        recommendedNext: ["empathy"]
      }
    ],
    audioReactive: true,
  },

  {
    id: "motivation",
    title: "Motivation & Goals",
    teaser: "What drives us forward",
    category: "Behavior",
    order: 5,
    color: "#C1121F",
    themeColor: "from-red-500 to-rose-500",
    description:
      "Motivation is not one thing. It's the dance between desire, reward, and friction.",
    longDescription: `Motivation is what moves you toward action. It's not a fixed trait—it's not that some people are "motivated" and others aren't. It's more like a system with multiple moving parts that interact constantly.

There are two fundamental types of motivation:

**Intrinsic motivation** comes from within—the desire to master something because it feels meaningful, or to help someone because you care. Intrinsic motivation is durable. It survives setbacks. It's resistant to burnout.

**Extrinsic motivation** comes from external rewards or punishments—money, grades, approval. Extrinsic motivation can feel powerful in the moment, but it's fragile. If the reward is removed or if you start to feel controlled by it, motivation collapses.

One of the most counterintuitive findings in motivation science: paying someone to do something they already enjoyed can *decrease* their motivation. Why? Because it shifts their perception from "I do this because I love it" to "I do this for the money." The external reward crowds out the internal meaning.

Sustainable motivation comes from aligning your actions with your values, from breaking big goals into small wins (dopamine loves small wins), and from progress itself. Progress is deeply motivating—feeling like you're moving forward is one of the most powerful human experiences.

The motivation cycle:
- Desire (wanting an outcome)
- Friction (difficulty, effort required)
- Reward (outcome achieved)
- Meaning (does it align with your values?)`,
    reflectionPrompts: [
      {
        question:
          "What are you working toward right now? Are you motivated by external rewards or internal meaning?",
        hint: "Notice how you feel when working toward this goal.",
      },
      {
        question:
          "Can you think of something you used to love but now feel obligated to do? What changed?",
        hint: "Consider what external pressures might have shifted your intrinsic motivation.",
      },
      {
        question:
          "What's one small win you could celebrate this week? How might that affect your motivation?",
        hint: "Your brain releases dopamine with achieved milestones.",
      },
    ],
    citations: [
      {
        title: "Drive: The Surprising Truth About What Motivates Us",
        author: "Daniel Pink",
        year: 2009,
      },
      {
        title: "Intrinsic and Extrinsic Motivations: Classic Definitions and New Directions",
        author: "Edward Deci & Richard Ryan",
        year: 2000,
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
      },
    ],
    subtopics: [
      {
        id: "intrinsic-vs-extrinsic",
        title: "Intrinsic vs Extrinsic Motivation",
        summary: "Why some drives last and others fade.",
        content: `Intrinsic motivation arises from within; extrinsic motivation is driven by outside rewards. Intrinsic motivation tends to be more sustainable and linked to personal meaning.`,
        examples: ["Learning a hobby for joy vs. for certification"],
        svg: "",
        recommendedNext: ["memory"]
      },
      {
        id: "habit-loop",
        title: "The Habit Loop",
        summary: "Cue, routine, reward—how habits form.",
        content: `Habits form through repeated cue-routine-reward cycles. Changing habits often requires adjusting one or more parts of this loop.`,
        examples: ["Using environmental cues to start a practice"],
        svg: "",
        recommendedNext: ["motivation"]
      }
    ],
    audioReactive: false,
  },

  {
    id: "memory",
    title: "Memory & Learning",
    teaser: "How we remember and grow",
    category: "Cognition",
    order: 6,
    color: "#1A1410",
    themeColor: "from-slate-900 to-neutral-900",
    description:
      "Your memory is not a camera; it's a storyteller. It reconstructs the past based on emotion, context, and belief.",
    longDescription: `One of the most unsettling discoveries in neuroscience: your memory is not a recording. Every time you retrieve a memory, you're reconstructing it. You're editing it based on your current emotional state, what you've learned since, and what you believe about yourself and the world.

Eyewitness testimony is notoriously unreliable because memory isn't accuracy—it's meaning-making. Two people can witness the same event and remember it completely differently, both sincerely.

But this is also the source of memory's power. Your brain isn't trying to store perfect data; it's trying to extract lessons that help you survive and thrive. It prioritizes:

- **Emotional intensity**: Traumatic or joyful events are seared into memory
- **Meaning**: Events that fit our narrative about ourselves stick
- **Relevance**: Irrelevant details fade; relevant ones strengthen
- **Repetition**: Spaced repetition—reviewing material at increasing intervals—builds lasting knowledge

Learning isn't about cramming information into your brain. It's about spacing out exposure, engaging multiple senses, and connecting new information to existing knowledge. This is why explaining something to someone else helps you learn it—you're building new neural connections.

Memory systems:
- **Working memory**: what you're thinking about right now (capacity: 5-9 items)
- **Episodic memory**: personal experiences ("where I was that day")
- **Semantic memory**: facts and concepts ("the capital of France")
- **Procedural memory**: skills and habits ("how to ride a bike")`,
    reflectionPrompts: [
      {
        question:
          "Recall a vivid memory from your childhood. Now consider: how much of that memory is your original experience vs. how you've retold it since?",
        hint: "Our most-repeated stories become most distorted.",
      },
      {
        question:
          "What's something you've been trying to learn but struggling with? Could spaced repetition help?",
        hint: "Review the material today, then in 1 day, 3 days, 1 week, 1 month.",
      },
      {
        question:
          "How might your belief about your intelligence affect how you approach learning?",
        hint: "Research on growth mindset shows our beliefs shape our effort and persistence.",
      },
    ],
    citations: [
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        year: 2011,
      },
      {
        title: "The Make-or-Break Role of Spaced Repetition",
        author: "James Clear",
        year: 2013,
      },
      {
        title: "Mindset: The New Psychology of Success",
        author: "Carol Dweck",
        year: 2006,
      },
    ],
    audioReactive: false,
  },

  {
    id: "fear",
    title: "Fear & Threat Response",
    teaser: "The amygdala's ancient wisdom",
    category: "Neuroscience",
    order: 7,
    color: "#2D5F8D",
    themeColor: "from-blue-600 to-indigo-600",
    description:
      "Fear is not a bug in your system; it's an ancient survival alarm that's trying to protect you.",
    longDescription: `Fear is one of our most misunderstood emotions. We treat it as weakness, something to overcome or hide. But fear is actually a gift from evolution—an early warning system that has kept your ancestors alive for millions of years.

Your amygdala—that almond-shaped structure in your brain—is constantly scanning the environment for threat. It works faster than your conscious mind. You can feel fear before you've had time to rationally analyze the situation. This is a feature: it's kept humans alive when milliseconds matter.

But here's the problem: your amygdala evolved for a world of physical threats. A lion. A cliff edge. A hostile tribe. Today, your amygdala reacts to emails, public speaking, social rejection, and financial uncertainty with the same intensity it would react to a predator.

Modern fear is often a false alarm. But treating it as "just in your head" misses the point. Your body is responding authentically to a perceived threat. The solution isn't to deny the fear or force yourself through it; it's to:

1. **Recognize it**: Name the fear. "I'm feeling anxious about public speaking."
2. **Understand it**: What does your amygdala think is at stake? (Social rejection? Judgment? Failure?)
3. **Reality-test it**: Is the danger as acute as your body thinks it is?
4. **Gradually approach it**: Exposure to feared situations, in doses your nervous system can handle, helps rewire your threat response.

The physiological fear response:
- Amygdala detects threat
- Releases adrenaline and cortisol
- Shunts blood to large muscles (fight/flight)
- Reduces digestive and immune function (not needed in emergency)
- Pupils dilate, senses heighten
- Rational thinking narrows (you see the threat, not the bigger picture)`,
    reflectionPrompts: [
      {
        question:
          "What are you most afraid of? Can you trace that fear back to its origin—when did you first feel it?",
        hint: "Often our fears connect to early experiences of being unsafe or rejected.",
      },
      {
        question:
          "How does your body typically signal fear? Do you notice physical symptoms before you notice the emotion?",
        hint: "Tension, racing heart, shallow breathing, nausea—your body often knows before your mind.",
      },
      {
        question:
          "Is there something you're avoiding because you're afraid? What would happen if you moved toward it slowly?",
        hint: "Exposure therapy—gradual approach to feared situations—is one of the most effective treatments for anxiety.",
      },
    ],
    citations: [
      {
        title: "The Gift of Fear",
        author: "Gavin de Becker",
        year: 1997,
      },
      {
        title: "The Anxiety and Phobia Workbook",
        author: "Edmund Bourne",
        year: 2010,
      },
      {
        title: "My Anxious Mind",
        author: "Michael Tompkins & Katherine Martinez",
        year: 2010,
      },
    ],
    audioReactive: true,
  },

  {
    id: "empathy",
    title: "Empathy & Mirror Neurons",
    teaser: "How we understand each other",
    category: "Social Neuroscience",
    order: 8,
    color: "#8B5CF6",
    themeColor: "from-purple-500 to-violet-500",
    description:
      "Your brain automatically mirrors the brain of those around you. This is the biological basis of empathy.",
    longDescription: `Empathy is not just an emotion or a moral choice. It's a biological reality. Your brain contains neurons that fire both when you perform an action and when you watch someone else perform that action. These "mirror neurons" are the neural basis of understanding and connection.

Watch someone stub their toe, and your brain activates in ways similar to if you'd stubbed your toe. Listen to someone cry, and your own tear-response systems activate. Watch someone smile, and your smile muscles engage (even if you don't smile back). Your brain is constantly synchronizing with others.

This is why emotional contagion is real. Your moods influence others; their moods influence you. It's why some people drain you and others energize you—your nervous system is literally syncing with theirs.

There are three types of empathy:

**Cognitive empathy** is understanding what someone thinks and why. It's answering the question: "What is this person thinking?"

**Emotional empathy** is feeling what someone feels. It's answering: "What is this person feeling?"

**Compassionate empathy** is the drive to help someone based on understanding their situation. It's answering: "What can I do to help?"

All three are valuable. But notably, they can diverge. You can cognitively understand why someone is suffering without emotionally feeling it (common in burnout). You can emotionally feel someone's pain without understanding the context (leading to overwhelm). Compassion integrates both.

Interestingly, empathy can be cultivated. Reading fiction increases empathy (because you're putting yourself in others' minds). Meditation increases it. Teaching children to recognize emotions in others' faces increases it. Empathy is not fixed; it's a skill you can develop.`,
    reflectionPrompts: [
      {
        question:
          "Who do you feel most naturally attuned to? What makes it easy for you to empathize with that person?",
        hint: "Notice whether it's cognitive understanding, emotional resonance, or both.",
      },
      {
        question:
          "Is there someone whose suffering you understand but don't feel? Or feel but don't understand?",
        hint: "This mismatch often creates guilt or frustration.",
      },
      {
        question:
          "How does empathy feel when it turns into empathic distress (feeling overwhelmed by others' pain)?",
        hint: "Consider the difference between feeling with someone and feeling for them.",
      },
    ],
    citations: [
      {
        title: "Emotional Intelligence: Why It Can Matter More Than IQ",
        author: "Daniel Goleman",
        year: 1995,
      },
      {
        title: "The Empathic Civilization",
        author: "Jeremy Rifkin",
        year: 2009,
      },
      {
        title: "Mirror Neurons and the Simulation Theory of Mind-Reading",
        author: "Vittorio Gallese & Alvin Goldman",
        year: 1998,
      },
    ],
    audioReactive: false,
  },
];

// Lookup helper for fast chapter access
export const chapterLookup = chapters.reduce(
  (acc, chapter) => {
    acc[chapter.id] = chapter;
    return acc;
  },
  {} as Record<string, Chapter>
);

// Helper to get chapters by category
export const chaptersByCategory = chapters.reduce(
  (acc, chapter) => {
    if (!acc[chapter.category]) acc[chapter.category] = [];
    acc[chapter.category].push(chapter);
    return acc;
  },
  {} as Record<string, Chapter[]>
);
