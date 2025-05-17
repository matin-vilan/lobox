import express from "express";
import cors from "cors";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import type { ISelectOptions } from "@components/ui/select/Select";

const app = express();
app.use(cors());
app.use(express.json());

const filePath = path.join(process.cwd(), "src/data.json");

// read options
app.get("/api/options", async (_req, res) => {
  try {
    const data = await readFile(filePath, "utf-8");
    const options = JSON.parse(data);
    res.json(options);
  } catch (err) {
    res.status(500).json({ error: "fail ...", err });
  }
});

// write option
app.post("/api/options", async (req, res) => {
  try {
    const newItem = req.body;
    const data = await readFile(filePath, "utf-8");
    const items = JSON.parse(data);
    items.push(newItem);
    await writeFile(filePath, JSON.stringify(items, null, 2));
    res.status(201).json({ message: "option added" });
  } catch (err) {
    res.status(500).json({ error: "fail...", err });
  }
});

// delete option
app.delete("/api/options/:id", async (req, res) => {
  try {
    console.log({ id: req.params.id });

    const id = req.params.id;
    const data = await readFile(filePath, "utf-8");
    const options: ISelectOptions[] = JSON.parse(data);
    const optionIndex = options.findIndex((option) => option.id === id);
    if (optionIndex === -1) {
      throw Error("Option Not Found.");
    }
    options.splice(optionIndex, 1);
    await writeFile(filePath, JSON.stringify(options, null, 2), "utf-8");
    res.status(200).json({ message: "option deleted." });
  } catch (err) {
    res.status(500).json({ error: "fail...", err });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
