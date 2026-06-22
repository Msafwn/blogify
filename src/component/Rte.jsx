import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function Rte({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
      {label && <label className='inline-block pb-2 pl-1 text-slate-300 font-medium text-sm'>{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({field: {onChange}}) => (
          <Editor
            apiKey='jxd4tbsrgkg37anfuv3jfqxxl21zwa587kzmelh8guye0qsd'
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              skin: 'oxide-dark',
              content_css: 'dark',
              plugins: [
                "image",
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
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; color: #e2e8f0; background-color: #1e293b; } a { color: #60a5fa; }"
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  )
}