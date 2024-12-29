export default {
    editor: {
        extensions: {
            Bold: {
                tooltip: "پررنگ",
            },
            Underline: {
                tooltip: "زیرخط",
            },
            Italic: {
                tooltip: "ایتالیک",
            },
            Strike: {
                tooltip: "خط خورده",
            },
            Heading: {
                tooltip: "عنوان",
                buttons: {
                    paragraph: "متن عادی",
                    heading: "عنوان",
                },
            },
            Blockquote: {
                tooltip: "نقل قول",
            },
            CodeBlock: {
                tooltip: "بلوک کد",
            },
            Link: {
                add: {
                    tooltip: "لینک اضافه کنید",
                    control: {
                        title: "اضافه کردن لینک",
                        href: "آدرس",
                        open_in_new_tab: "در تب جدید باز شود",
                        confirm: "اعمال",
                        cancel: "لغو",
                    },
                },
                edit: {
                    tooltip: "ویرایش لینک",
                    control: {
                        title: "ویرایش لینک",
                        href: "آدرس",
                        open_in_new_tab: "در تب جدید باز شود",
                        confirm: "به‌روزرسانی",
                        cancel: "لغو",
                    },
                },
                unlink: {
                    tooltip: "حذف لینک",
                },
                open: {
                    tooltip: "باز کردن لینک",
                },
            },
            Image: {
                buttons: {
                    insert_image: {
                        tooltip: "درج تصویر",
                        external: "درج تصویر از URL",
                        upload: "بارگذاری تصویر",
                    },
                    remove_image: {
                        tooltip: "حذف",
                    },
                    image_options: {
                        tooltip: "گزینه‌های تصویر",
                    },
                    display: {
                        tooltip: "نمایش",
                        inline: "در خط",
                        block: "شکستن متن",
                        left: "چپ‌چین",
                        right: "راست‌چین",
                    },
                },
                control: {
                    insert_by_url: {
                        title: "درج تصویر",
                        placeholder: "آدرس تصویر",
                        confirm: "درج",
                        cancel: "لغو",
                        invalid_url: "لطفاً آدرس صحیح را وارد کنید",
                    },
                    upload_image: {
                        title: "بارگذاری تصویر",
                        button: "یک فایل تصویر انتخاب کنید یا آن را اینجا بکشید",
                    },
                    edit_image: {
                        title: "ویرایش تصویر",
                        confirm: "به‌روزرسانی",
                        cancel: "لغو",
                        form: {
                            src: "آدرس تصویر",
                            alt: "متن جایگزین",
                            width: "عرض",
                            height: "ارتفاع",
                        },
                    },
                },
            },
            Iframe: {
                tooltip: "درج ویدیو",
                control: {
                    title: "درج ویدیو",
                    placeholder: "آدرس",
                    confirm: "درج",
                    cancel: "لغو",
                },
            },
            BulletList: {
                tooltip: "لیست گلوله‌ای",
            },
            OrderedList: {
                tooltip: "لیست مرتب",
            },
            TodoList: {
                tooltip: "لیست کارها",
            },
            TextAlign: {
                buttons: {
                    align_left: {
                        tooltip: "چپ‌چین",
                    },
                    align_center: {
                        tooltip: "وسط‌چین",
                    },
                    align_right: {
                        tooltip: "راست‌چین",
                    },
                    align_justify: {
                        tooltip: "تراز",
                    },
                },
            },
            FontType: {
                tooltip: "نوع قلم",
            },
            FontSize: {
                tooltip: "اندازه قلم",
                default: "پیش‌فرض",
            },
            TextColor: {
                tooltip: "رنگ متن",
            },
            TextHighlight: {
                tooltip: "هایلایت متن",
            },
            LineHeight: {
                tooltip: "ارتفاع خط",
            },
            Table: {
                tooltip: "جدول",
                buttons: {
                    insert_table: "درج جدول",
                    add_column_before: "اضافه کردن ستون قبل",
                    add_column_after: "اضافه کردن ستون بعد",
                    delete_column: "حذف ستون",
                    add_row_before: "اضافه کردن ردیف قبل",
                    add_row_after: "اضافه کردن ردیف بعد",
                    delete_row: "حذف ردیف",
                    merge_cells: "ادغام سلول‌ها",
                    split_cell: "تقسیم سلول",
                    delete_table: "حذف جدول",
                },
            },
            Indent: {
                buttons: {
                    indent: {
                        tooltip: "تورفتگی",
                    },
                    outdent: {
                        tooltip: "برگشت به عقب",
                    },
                },
            },
            FormatClear: {
                tooltip: "پاک کردن فرمت",
            },
            HorizontalRule: {
                tooltip: "خط افقی",
            },
            History: {
                tooltip: {
                    undo: "بازگشت",
                    redo: "از نو",
                },
            },
            Fullscreen: {
                tooltip: {
                    fullscreen: "تمام صفحه",
                    exit_fullscreen: "خروج از تمام صفحه",
                },
            },
            Print: {
                tooltip: "چاپ",
            },
            Preview: {
                tooltip: "پیش‌نمایش",
                dialog: {
                    title: "پیش‌نمایش",
                },
            },
            SelectAll: {
                tooltip: "انتخاب همه",
            },
            CodeView: {
                tooltip: "نمایش کد",
            },
        },
        characters: "کاراکترها",
    },
};
