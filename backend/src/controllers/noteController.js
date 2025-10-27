import Note from '../model/Note.js';

export async function getAllNotes(_, res) {
    try {
        const note = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(note);
    } catch (error) {
        console.log("Error in getAllNotes: ", error);

        res.status(500).json({ message: error.message });
    }
};

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(400).json({ message: "Note not found." })

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });

        await newNote.save();
        res.status(201).json({message: "Note created successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export async function updateNote(req, res) {
    try{
        const { title, content} = req.body;

        const updateNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if (!updateNote) return res.status(400).json({ message: "Note not found." })

        res.status(200).json({message: "Note updated successfully"});
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deleteNote) return res.status(400).json({ message: "Note not found." })

        res.status(200).json({message: "Note deleted successfully"});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};