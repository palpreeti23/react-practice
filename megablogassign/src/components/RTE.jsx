import React from "react";
import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

function RTE({ name, label, control, defaultValue = "" }) {
  return (
    <div className="w-full h-auto">
      {label && <label className="text-lg text-black py-2 px-3">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: onChange }) => (
          <Editor
            apiKey="2xnm8r8h1xqceuzzcifleksvhm15m396bjb80nb9m8rxseft"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 400,
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
                "undo redo | blocks | " +
                "bold italic underline strikethrough | forecolor backcolor | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | " +
                "link image media table | " +
                "removeformat code fullscreen help",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
