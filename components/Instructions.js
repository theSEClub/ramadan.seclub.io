import React from 'react'

export default function Instructions() {
    return (
        <>
            <div className="my-12">
                <ul className="text-right list-disc pr-4" dir="rtl">
                    <li className="text-xs lg:text-sm text-slate-500 my-2">
                        مواعيد المحاضرات في رمضان تبدأ من الساعة 10:00 صباحاً وتنتهي عند
                        الخامسة عصراً كحد أقصى إذا كانت حضورية في الجامعة.
                    </li>
                    <li className="text-xs lg:text-sm text-slate-500 my-2">
                        المحاضرات بعد الخامسة عصراً تستمر عن بعد ويتم الاتفاق على وقت مناسب
                        للجميع بين الطلاب والمعلمين.{" "}
                    </li>
                    <li className="text-xs lg:text-sm text-slate-500 my-2">
                        حسب التوقيت الرمضاني تتحول أوقات المحاضرات ذات 50 دقيقة إلى 40
                        دقيقة، بينما المحاضرات بمدة 75 دقيقة (ساعة وربع) تصبح مدتها ساعة.{" "}
                    </li>
                    <li className="text-xs lg:text-sm text-slate-500 my-2">
                        المعامل ذات الساعتين تصبح مدتها 80 دقيقة (ساعة ونصف)، والمعامل بطول
                        ثلاث ساعات تصبح ساعتين.
                    </li>
                </ul>
            </div>
        </>
    )
}
