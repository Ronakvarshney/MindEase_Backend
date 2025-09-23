import { hashSync } from "bcryptjs";

export const mentalHealthQA = {
  // 🔹 Intro / Small Talk
  hello:
    "Hi there! I’m MindEase, here to support your mental well-being. How are you doing?",
  hi: "Hi there! I’m MindEase, here to support your mental well-being. How are you doing?",
  hii: "Hi there! I’m MindEase, here to support your mental well-being. How are you doing?",
  hlo: "Hi there! I’m MindEase, here to support your mental well-being. How are you doing?",

  hy: "Hi there! I’m MindEase, here to support your mental well-being. How are you doing?",

  hey: "Hey! I'm MindEase. I’m here to help you with stress, anxiety, or anything related to mental health.",
  "i am fine" : "great !! , now tell me , your questions related to mental health" ,
  "how to resolve" : "keep doing yogas and chanting mantras and be silence in fights and keep your mind fresh" ,
  "kese ho":
    "I’m doing great, thank you for asking! But I’m more interested in how you are feeling today.",

  "who are you":
    "I’m MindEase, your AI mental health assistant. I provide guidance, tips, and support for emotional well-being.",
  "what can you do":
    "I can answer questions about stress, anxiety, depression, sleep, motivation, and self-care. How can I support you today?",
  "how are you":
    "I’m doing great, thank you for asking! But I’m more interested in how you are feeling today.",
  "how can you help me":
    "I can guide you with stress relief tips, mindfulness practices, coping strategies, and general mental health advice.",
  "nice to meet you":
    "Nice to meet you too! I’m here to make your mental health journey easier. How are you feeling right now?",
  "thank you":
    "You're welcome! 💙 Remember, taking care of your mental health is always a priority.",
  bye: "Goodbye! Take care of yourself. Remember, I’m always here if you need to talk again.",

  "what is mental health":
    "Mental health refers to our emotional, psychological, and social well-being. It affects how we think, feel, and behave in daily life.",
  "why is mental health important":
    "Good mental health helps us cope with stress, build relationships, make decisions, and live a fulfilling life.",
  "what affects mental health":
    "Mental health is influenced by biological factors, life experiences, trauma, and social environment.",
  "what are common mental health issues":
    "Common issues include stress, anxiety, depression, bipolar disorder, PTSD, and eating disorders.",
  "can mental health change over time":
    "Yes, mental health can improve or decline depending on lifestyle, environment, and support systems.",

  // 🔹 Stress
  "what are common signs of stress":
    "Headaches, trouble sleeping, irritability, lack of focus, fatigue, or feeling overwhelmed.",
  "what are quick ways to relieve stress":
    "Deep breathing, stretching, meditation, journaling, and short breaks help reduce stress quickly.",
  "how does exercise reduce stress":
    "Exercise releases endorphins, natural chemicals that boost mood and reduce stress hormones.",
  "does journaling help with stress":
    "Yes, writing down your thoughts helps release tension and improves clarity.",
  "what are unhealthy ways people cope with stress":
    "Smoking, drinking, overeating, aggression, or social withdrawal are unhealthy coping mechanisms.",

  // 🔹 Anxiety
  "what is anxiety":
    "Anxiety is excessive worry or fear that interferes with daily life.",
  "what are symptoms of anxiety":
    "Restlessness, racing thoughts, rapid heartbeat, sweating, and difficulty concentrating.",
  "what is a panic attack":
    "A sudden episode of intense fear with symptoms like chest pain, dizziness, and shortness of breath.",
  "how do i calm anxiety naturally":
    "Breathing exercises, meditation, reducing caffeine, and talking to supportive friends help.",
  "can caffeine increase anxiety":
    "Yes, caffeine can trigger restlessness and worsen anxiety in some people.",

  // 🔹 Depression
  "what is depression":
    "Depression is a mood disorder causing persistent sadness, loss of interest, and low energy.",
  "what are symptoms of depression":
    "Persistent sadness, hopelessness, sleep changes, appetite changes, and loss of motivation.",
  "how can i cope with depression":
    "Stay active, connect with others, eat healthy, maintain a routine, and seek therapy if needed.",
  "is depression treatable":
    "Yes, with therapy, medication, and lifestyle changes, depression is treatable.",
  "when should i seek help for depression":
    "If sadness lasts more than two weeks, interferes with life, or you have thoughts of self-harm.",

  // 🔹 Sleep & Relaxation
  "how much sleep do adults need":
    "Adults typically need 7–9 hours of sleep per night for optimal health.",
  "how does poor sleep affect mental health":
    "It increases stress, irritability, poor focus, and risk of anxiety or depression.",
  "what helps with better sleep":
    "Maintain a routine, avoid screens before bed, keep your room dark, and relax before sleep.",
  "can naps improve mental health":
    "Yes, short naps (15–20 minutes) restore energy and improve mood.",
  "does meditation help with sleep":
    "Yes, meditation calms the mind and reduces racing thoughts before sleep.",

  // 🔹 Mindfulness & Meditation
  "what is mindfulness":
    "Mindfulness means focusing on the present moment without judgment.",
  "how does mindfulness reduce stress":
    "It lowers negative thinking and helps you stay calm under pressure.",
  "what are simple mindfulness practices":
    "Deep breathing, mindful eating, walking meditation, and gratitude journaling.",
  "can meditation improve focus":
    "Yes, meditation strengthens concentration and emotional regulation.",
  "how long should i meditate daily":
    "Even 5–10 minutes daily can bring noticeable benefits.",

  // 🔹 Therapy & Counseling
  "what is therapy":
    "Therapy is a process of talking with a trained professional to explore feelings and improve mental health.",
  "is therapy only for serious issues":
    "No, therapy can help with everyday stress, relationships, and self-growth too.",
  "what is cbt":
    "Cognitive Behavioral Therapy (CBT) helps identify and change negative thought patterns.",
  "can therapy be done online":
    "Yes, online therapy sessions are increasingly common and effective.",
  "how long does therapy take":
    "It depends—some need weeks, others months or more, depending on goals.",

  // 🔹 Motivation & Self-care
  "how can i stay motivated daily":
    "Set small goals, reward progress, and surround yourself with positivity.",
  "what are examples of self-care":
    "Reading, exercising, journaling, hobbies, meditation, and spending time with loved ones.",
  "does gratitude improve mental health":
    "Yes, gratitude increases positive emotions and lowers stress.",
  "how can i build self-confidence":
    "Celebrate small achievements, practice self-kindness, and challenge negative thoughts.",
  "how does diet affect mental health":
    "A balanced diet supports brain function and emotional stability.",

  // 🔹 Lifestyle & Habits
  "does exercise improve mental health":
    "Yes, regular exercise reduces anxiety, depression, and stress while improving mood.",
  "how does social connection help":
    "Supportive relationships reduce loneliness and improve resilience.",
  "does spending time in nature improve mental health":
    "Yes, nature lowers stress and increases relaxation and happiness.",
  "why is routine important for mental health":
    "Routine provides stability and helps reduce uncertainty and stress.",
  "does reducing screen time help":
    "Yes, reducing screen time improves focus, sleep, and lowers anxiety.",

  // 🔹 Helping Others
  "how can i help a friend with anxiety":
    "Listen, validate their feelings, avoid judgment, and encourage professional help if needed.",
  "what not to say to someone depressed":
    "Avoid 'just cheer up' or 'you’re overreacting'. Be supportive instead.",
  "why is mental health awareness important":
    "It reduces stigma, encourages seeking help, and builds supportive communities.",
  "how can workplaces support mental health":
    "By promoting work-life balance, counseling, and open conversations.",
  "how can i support family mental health":
    "Spend quality time, communicate openly, and provide emotional support.",

  // 🔹 Advanced / Special Topics
  "what is ptsd":
    "Post-Traumatic Stress Disorder develops after trauma, with flashbacks, nightmares, and severe anxiety.",
  "what are eating disorders":
    "Conditions like anorexia, bulimia, or binge-eating that affect both mental and physical health.",
  "what is bipolar disorder":
    "A condition with extreme mood swings between depression and mania.",
  "what is ocd":
    "Obsessive-Compulsive Disorder involves unwanted thoughts and repetitive behaviors.",
  "does alcohol affect mental health":
    "Yes, alcohol can worsen depression, anxiety, and sleep issues.",

  // 🔹 Coping & Resilience
  "how can i build emotional resilience":
    "Practice self-care, build supportive relationships, and focus on problem-solving.",
  "what is positive self-talk":
    "Encouraging yourself with kind words instead of harsh criticism.",
  "how can i handle failure positively":
    "View failure as learning, reflect on mistakes, and try again with new strategies.",
  "what role does gratitude play in resilience":
    "Gratitude shifts focus to positives and strengthens coping ability.",
  "how can i manage negative thoughts":
    "Challenge them with facts, reframe perspectives, and practice mindfulness.",
};
