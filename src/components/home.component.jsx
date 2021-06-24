import React from "react";

import AddBtn from "./add-note-btn.component";
import NoteBox from "./note-box.component";

export default function Dashboard(props) {
  return (
    <div>
      <AddBtn />
      <NoteBox />
    </div>
  );
}
