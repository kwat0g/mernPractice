import { Link } from "react-router"
import Note from "../../../backend/src/model/Note"
import { PenSquareIcon } from "lucide-react"

const NoteCard = () => {
  return (
    <Link to={`/note/${note._id}`} 
        className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
    >
        <div className="card-body">
            <h3 className="card-title text-base-content">{ note.title }</h3>
            <p className="text-base/70 line-clamp-3">{ note.content }</p>
            <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-base-content/60">
                    {note.createdAt.toLocaleDateString()}
                </span>
                <div className="flex items-center gap-1">
                    <PenSquareIcon className="size-4"/>
                    <button className="btn btn-ghost btn-xs text-error">
                        <Trash2Icon className="size-4" />
                    </button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard
