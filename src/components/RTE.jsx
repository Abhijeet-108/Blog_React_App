import React from 'react'
import {Editor} from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form'


export default function RTE({
    name,
    control,
    defaultValue = "",
    label,
}) {
    return (
          // editor component => 
        <div className='w-full'>
            {label && <label className='inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{label}</label>}

            <Controller
            name={name || "content"}
            control={control}
            render={({field: {onChange}}) => (
                <Editor 
                initialValue='default value'
                init={
                    {
                        initialValue:{defaultValue},
                        branding: false,
                        height: 500,
                        menubar: true,
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
                        toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"

                    }}
                    onEditorChange={onChange}
                />
            )}
            />
        </div>
    )
}

