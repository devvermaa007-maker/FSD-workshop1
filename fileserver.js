import fs from "node:fs/promises";

async function createfile(filePath, content = "welcome to backend programming") {
	await fs.writeFile(filePath, content, { encoding: "utf8", flag: "wx" });
	return `File created: ${filePath}`;
  
}

async function readfile(filePath) {
	return fs.readFile(filePath, "utf8");
 
}

async function updatefile(filePath, content) {
	await fs.writeFile(filePath, content, "utf8");
	return `File updated: ${filePath}`;
    
}

async function deletefile(filePath) {
	await fs.unlink(filePath);
	return `File deleted: ${filePath}`;
   
}


export { createfile, readfile, updatefile, deletefile };

