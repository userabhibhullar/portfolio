export const languages = [
  {
    id: "js",
    name: "Javascript",
    level: "Intermediate",
    image: "/images/logos/logo-javascript.svg",
  },
  {
    id: "python",
    name: "Python",
    level: "Intermediate",
    image: "/images/logos/logo-python.svg",
  },
  {
    id: "cpp",
    name: "C++",
    level: "Intermediate",
    image: "/images/logos/logo-cpp.svg",
  },
  {
    id: "dart",
    name: "Dart",
    level: "Beginner",
    image: "/images/logos/logo-dart.svg",
  },
  {
    id: "csharp",
    name: "C#",
    level: "Beginner",
    image: "/images/logos/logo-csharp.svg",
  },
  {
    id: "ts",
    name: "TypeScript",
    level: "Beginner",
    image: "/images/logos/logo-typescript.svg",
  },
];

export const frameworks = [
  {
    id: "react",
    name: "React",
    level: "Advance",
    image: "/images/logos/logo-react.svg",
  },
  {
    id: "flask",
    name: "Flask",
    level: "Advance",
    image: "/images/logos/logo-flask.svg",
  },
  {
    id: "vue",
    name: "Vue",
    level: "Beginner",
    image: "/images/logos/logo-vue.svg",
  },
  {
    id: "flutter",
    name: "Flutter",
    level: "Beginner",
    image: "/images/logos/logo-flutter.svg",
  },
  {
    id: "keras",
    name: "Keras",
    level: "Intermediate",
    image: "/images/logos/logo-keras.svg",
  },
  {
    id: "express",
    name: "Express",
    level: "Advance",
    image: "/images/logos/logo-express.svg",
  },
  {
    id: "tensorflow",
    name: "Tensorflow",
    level: "Beginner",
    image: "/images/logos/logo-tensorflow.svg",
  },
];

export const other = [
  {
    name: "Linux",
    level: "Advance",
    image: "/images/logos/logo-linux.svg",
  },
  {
    name: "Git",
    level: "Advance",
    image: "/images/logos/logo-git.svg",
  },
  {
    name: "Unreal",
    level: "Beginner",
    image: "/images/logos/logo-unreal.svg",
  },
  {
    name: "Unity",
    level: "Beginner",
    image: "/images/logos/logo-unity.svg",
  },
  {
    name: "Blender",
    level: "Intermediate",
    image: "/images/logos/logo-blender.svg",
  },
  {
    name: "Arduino",
    level: "Advance",
    image: "/images/logos/logo-arduino.svg",
  },
];

export function findLanguageByID(id) {
  let matchingItem;
  languages.forEach((item) => {
    if (item.id === id) {
      matchingItem = item;
    }
  });
  return matchingItem;
}

export function findFrameworkByID(id) {
  let matchingItem;
  frameworks.forEach((item) => {
    if (item.id === id) {
      matchingItem = item;
    }
  });
  return matchingItem;
}
