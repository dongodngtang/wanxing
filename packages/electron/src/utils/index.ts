import { exec } from "child_process";

export const getProcessList = () => {
  return new Promise((resolve, reject) => {
    const cmd = process.platform === "win32" ? "tasklist" : "ps aux";
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        const processList = stdout.split("\n").map((line) => {
          let processMessage = line.trim().split(/\s+/);
          return processMessage[0];
        });
        resolve(processList);
      }
    });
  });
};
