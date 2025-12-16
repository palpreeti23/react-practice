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
            apiKey="2xnm8r8h1xqceuzzcifleksvhm15m396bjb80nb9m8rxseft"
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
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onchange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
