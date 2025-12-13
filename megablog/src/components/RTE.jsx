import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

function RTE({ name, label, control, defaultValue = "" }) {
  return (
    <div className="w-full h-auto">
      <label className="text-lg text-black py-2 px-3 ">{label}</label>
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: onchange }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic underline | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | link image | code",
            }}
            onEditorChange={onchange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
