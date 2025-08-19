import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"], // путь к твоим исходникам
  moduleFileExtensions: ["ts", "js", "json", "node"],
};

export default config;