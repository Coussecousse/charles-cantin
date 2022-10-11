import React, { useEffect } from "react";

import data from '../../home.json'

export default function PageNotFound() {
    useEffect(() => {
        document.title = data[0].siteTitle + ' | 404'
        document.querySelector('meta[name="description"]').setAttribute("content", data[0].description);
    })
    return (
        <div className="container container-svg">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="792.41214" height="763.67855" viewBox="0 0 792.41214 763.67855" xmlnsXlink="http://www.w3.org/1999/xlink">
                <circle cx="180.18" cy="49.43208" r="49.43208" fill="hsl(194, 100%, 46%)"/>
                <path d="M439.60693,433.14822a81.05685,81.05685,0,0,1-52.68051-19.45347c-4.89745-4.19218-10.1157-11.48032-15.50943-21.66053a49.53621,49.53621,0,0,1-1.57108-42.76506,56.842,56.842,0,0,1-9.38677,7.69937l-1.71614,1.14183-.09914-2.05778c-.06506-1.33843-.098-2.67236-.098-3.9646,0-7.61572,5.76007-15.34359,3.10358-22.383-11.19647-29.66913-46.70888-59.1543,4.75943-105.0715,4.76112-4.24762-1.599-12.74018-1.599-19.16674,0-62.98182,68.43238-157.45982,114.24335-114.22108,26.74027,25.23883,82.45206,43.16815,108.46375,78.27408l.34446,1.04016-1.01509.41065a61.2228,61.2228,0,0,1-16.2668,4.32653,77.56881,77.56881,0,0,0,18.13813,1.51954l.94355-.03295.22983.91707a114.74268,114.74268,0,0,1,3.4058,27.766l-.00423,1.01171a50.592,50.592,0,0,0,16.71267,37.72313,81.24432,81.24432,0,0,1,26.50586,59.95092c0,13.35194-9.07469,30.87859-16.68759,43.23064A24.44537,24.44537,0,0,1,601.8781,358.8776a23.87313,23.87313,0,0,1-19.26673-6.22406A78.94867,78.94867,0,0,0,596.534,372.365l1.03875,1.07029-1.28971.75146a80.99749,80.99749,0,0,1-40.83178,11.02687l-.84018-.00226c-21.78164,0-42.45665,8.43844-56.72369,23.15219A81.67332,81.67332,0,0,1,439.60693,433.14822Z" transform="translate(-203.80173 -68.52653)" fill="#e6e6e6"/>
                <path d="M411.02214,560.12629a1.45772,1.45772,0,0,1-1.44143-1.25232c-.06192-.43516-6.12837-44.18711-.68-102.33528,5.03159-53.70122,21.19-131.04989,69.59439-194.57511a1.45784,1.45784,0,1,1,2.3191,1.7672c-47.9863,62.97665-64.01448,139.75776-69.01059,193.07983-5.41667,57.80982.6022,101.22057.66365,101.6524a1.45906,1.45906,0,0,1-1.4451,1.66328Z" transform="translate(-203.80173 -68.52653)" fill="#ccc"/>
                <path d="M455.21934,349.96155a1.45779,1.45779,0,0,1-.85821-2.637,200.92039,200.92039,0,0,1,44.35616-22.57973c24.47208-8.95937,61.68553-17.08166,99.99613-4.88874a1.45763,1.45763,0,1,1-.88408,2.778c-37.5257-11.94236-74.06459-3.95437-98.10958,4.84888A197.61933,197.61933,0,0,0,456.07518,349.683,1.452,1.452,0,0,1,455.21934,349.96155Z" transform="translate(-203.80173 -68.52653)" fill="#ccc"/>
                <path d="M387.49888,177.78589a1.45779,1.45779,0,0,1,2.56838-1.04589,200.92088,200.92088,0,0,1,25.7154,42.61492c10.69848,23.76333,21.4796,60.29523,12.07727,99.38443a1.45763,1.45763,0,1,1-2.83443-.68172c9.20894-38.2883-1.38965-74.15706-11.90165-97.50566a197.61951,197.61951,0,0,0-25.28551-41.93252A1.45205,1.45205,0,0,1,387.49888,177.78589Z" transform="translate(-203.80173 -68.52653)" fill="#ccc"/>
                <path d="M743.1543,648.7041c-100.26758,0-177.2295-5.27734-230.64746-26.43848-130.10889-51.54-174.21827-72.94335-174.64893-73.15332l.87793-1.79687c.42969.21,44.49512,21.58887,174.50732,73.09082,77.11622,30.5498,203.999,27.8252,379.61524,24.05273,32.95508-.707,67.03222-1.43945,103.32422-2.02246l.03125,2c-36.28516.583-70.36035,1.31446-103.3125,2.02246C838.27051,647.63184,788.34277,648.7041,743.1543,648.7041Z" transform="translate(-203.80173 -68.52653)" fill="#cacaca"/>
                <path d="M320.00391,779.9209l-1.41407-1.41406c48.58008-48.58008,67.30078-67.15332,71.26709-71.083L246.71143,604.02441l1.17089-1.62109L392.94238,707.18555l-.84033.83007C391.94141,708.1748,375.35938,724.56543,320.00391,779.9209Z" transform="translate(-203.80173 -68.52653)" fill="#cacaca"/>
                <path d="M392.08154,832.20508l-1.36425-1.46289C395.19873,826.55957,500.606,728.40625,521.146,728.40625h.06494l472.0957,4.80762-.01953,2-472.09668-4.80762h-.05811C501.395,730.40625,393.17383,831.18555,392.08154,832.20508Z" transform="translate(-203.80173 -68.52653)" fill="#cacaca"/><rect x="658.2432" y="610.68734" width="121.25195" height="2" fill="#cacaca"/><rect x="431.2432" y="610.68734" width="121.25195" height="2" fill="#cacaca"/><path d="M629.29687,518.05573h-70V500.37152h26a6,6,0,0,0,6-6V475.21363a6,6,0,0,0-6-6h-26v-6a8,8,0,0,0-16,0v6h-96.0907a5.9997,5.9997,0,0,0-3.46747,1.10339l-13.527,9.57892a6,6,0,0,0,0,9.79321l13.527,9.579a6.00021,6.00021,0,0,0,3.46747,1.10339h96.0907v17.68421h-70a6,6,0,0,0-6,6v19.1579a6,6,0,0,0,6,6h70v66a8,8,0,0,0,16,0v-66h70a6,6,0,0,0,6-6v-19.1579A6,6,0,0,0,629.29687,518.05573Z" transform="translate(-203.80173 -68.52653)" fill="#3f3d56"/>
                <path d="M511.29687,485.71363h-50a3.5,3.5,0,0,1,0-7h50a3.5,3.5,0,0,1,0,7Z" transform="translate(-203.80173 -68.52653)" fill="hsl(194, 100%, 46%)"/><path d="M573.29687,536.71363h-50a3.5,3.5,0,1,1,0-7h50a3.5,3.5,0,0,1,0,7Z" transform="translate(-203.80173 -68.52653)" fill="#fff"/><path d="M333.29687,618.05573V600.37152h26a6,6,0,0,0,6-6V575.21363a6,6,0,0,0-6-6h-26V563.4877a8.18211,8.18211,0,0,0-7.46748-8.25679,8.00067,8.00067,0,0,0-8.53252,7.98272v6l-107.60875,50.349a3.55189,3.55189,0,0,0-1.874,2.111c-.84759,2.58218-2.6281,8.09222-3.83913,12.43791a4.66845,4.66845,0,0,0,4.64963,5.90722c6.9348-.213,11.4977-.536,14.66456-.62427a4.63956,4.63956,0,0,0,1.76982-.40486l92.23789-38.61813v48.84211l0,65.72593a8.1821,8.1821,0,0,0,7.46748,8.25678,8.00067,8.00067,0,0,0,8.53253-7.98271v-97.1579Z" transform="translate(-203.80173 -68.52653)" fill="#3f3d56"/><path d="M291.54125,600.68087l-45.62534,20.45306a3.5,3.5,0,0,1-2.86343-6.38755l45.62534-20.45306a3.5,3.5,0,0,1,2.86343,6.38755Z" transform="translate(-203.80173 -68.52653)" fill="#fff"/><path d="M902.98823,437.75036,882.13751,439.866a61.77461,61.77461,0,0,0,5.4177,31.25772l-6.25661,58.271.09288-.00134a6.76555,6.76555,0,1,0,11.15686-.81256l13.90492-51.9937Z" transform="translate(-203.80173 -68.52653)" fill="#a0616a"/>
                <polygon points="635.054 625.01 626.195 623.483 625.327 596.741 640.942 590.836 635.054 625.01" fill="#a0616a"/>
                <path d="M837.57614,702.83271,810.33086,698.139l.05934-.34456a10.76144,10.76144,0,0,1,12.43119-8.778l.00066.00011,5.627-2.91843,8.63508,5.37549,2.37834.40973Z" transform="translate(-203.80173 -68.52653)" fill="#2f2e41"/>
                <polygon points="723.94 606.495 716.268 611.18 694.542 583.815 705.867 576.9 723.94 606.495" fill="#a0616a"/>
                <path d="M932.90056,682.86053l-23.59467,14.40931-.18224-.29839a10.76142,10.76142,0,0,1,3.57473-14.79219l.00057-.00035,2.31283-5.90182,10.03831-1.641,2.05966-1.25784Z" transform="translate(-203.80173 -68.52653)" fill="#2f2e41"/>
                <path d="M841.88589,530.89854l-5.31572,20.20133s-1.4516,8.37183-.69968,9.12375a10.09259,10.09259,0,0,1,1.84133,6.22263c-.33748,2.04855-3.77741,1.21373-2.05744,4.26288s-3.59576,49.44945-3.59576,49.44945l-4.76175,57.055,17,2c2.44085-1.4292,2.79888-3.05433,1.35791-4.84876,0,0,3.48706-4.02173,1.56457-5.58649s1.55072-2.21881,1.73969-6.21185l10.97306-39.18119,3.63149-8.75852-.94943-4.56891,2.7589-5.24571,1.32637-13.75964,3.59744,36.16107,33.598,38.58151L920.4372,657.524l.97065-2.11442a3.92746,3.92746,0,0,0-1.49876-4.97583h0l-5.61222-5.22008c.48071-2.15058-7.154-7.54171-7.154-7.54171l-12.78273-24.06161,7.93668-67.39668s12-16-3.89739-30.47769C891.88667,509.80475,841.88589,530.89854,841.88589,530.89854Z" transform="translate(-203.80173 -68.52653)" fill="#2f2e41"/>
                <path d="M893.04579,504.35884c2.81825-4.18859,9.58558,1.82681,7.3298-5.69244s-7.96332-8.91695-2.85377-16.1133l7.36532-35.87019,0,0a33.002,33.002,0,0,0-8.10668-23.41481l-10.60224-12.1337-1.59307-4.30352L866.539,406.079l-1.50387,5.26346c-5.39127,6.71274-14.21454,15.33246-13.95051,28.01068.50806,24.3974-3.29663,56.8613-12.66839,99.09424,0,0,20.9585-16.3651,27.54831-9.27486s26.44185,5.16274,31.40339.22222a29.37879,29.37879,0,0,0,6.76733-12.03081S890.22759,508.54744,893.04579,504.35884Z" transform="translate(-203.80173 -68.52653)" fill="hsl(194, 100%, 46%)"/>
                <path d="M904.44069,532.8136l-41.14382-11.6-27,13c12.08914-22.49438,19.44475-59.9472,17.12149-91.76378a36.684,36.684,0,0,1,3.83557-19.59482c3.71175-7.144,9.517-12.19158,18.04294-11.6414l11-1,7,4c10.12859,10.611,14.11334,26.4425,12.53679,41.02794-1.73956,16.09773-3.905,35.6533-4.34156,37.39983-.25627,1.02619.55366,2.8278,1.411,4.73515,1.44731,3.21845,3.24819,7.22406.746,9.7262a7.28152,7.28152,0,0,0-2.454,5.3369,6.527,6.527,0,0,0,2.43385,4.63969c3.19715,2.76171.97221,14.87769.876,15.39207Z" transform="translate(-203.80173 -68.52653)" fill="#2f2e41"/>
                <path d="M883.4509,453.14234l-20.67157-3.45173a61.77469,61.77469,0,0,0-3.0077,31.58086L838.386,535.83621l.09.02318a6.76554,6.76554,0,1,0,10.97685,2.15513l27.1102-46.4944Z" transform="translate(-203.80173 -68.52653)" fill="#a0616a"/>
                <path d="M859.29687,464.21363l24-5,3.92-17.41823a13.53467,13.53467,0,0,0-27.06933,0C857.72869,451.48862,858.1505,454.29709,859.29687,464.21363Z" transform="translate(-203.80173 -68.52653)" fill="hsl(194, 100%, 46%)"/>
                <circle cx="671.00841" cy="316.49851" r="18.79813" fill="#a0616a"/>
                <path d="M896.616,370.73846c-1.463-2.61788-7.28171.73123-9.08561-1.66448a19.62437,19.62437,0,0,0-5.35848-5.27421,11.70515,11.70515,0,0,0-11.54043-.12841,23.20611,23.20611,0,0,1-4.14587,2.35577c-1.51849.485-3.50083.11846-4.15839-1.33363q.69563,1.90325,1.39122,3.80653a5.41492,5.41492,0,0,1-6.97454-2.22466q-.12246,1.97071-.24479,3.94146a1.57068,1.57068,0,0,0-1.726-1.10136,2.8303,2.8303,0,0,0-1.92456,2.01341c-1.18732,3.492,1.653,7.56785,5.29464,8.153,2.25238.36192,4.51756-.361,6.77816-.66752s4.87741-.05058,6.30545,1.7285c1.40242,1.74718,1.13078,4.23683,1.212,6.47576s1.05979,4.925,3.28022,5.22369c1.52363.205,2.97957-.85767,4.51426-.76662,2.19052.13,3.5951,2.64767,3.3592,4.82933s-1.6077,4.0493-2.93124,5.7996q3.28193.25968,6.56379.51929l-.84816.23516c5.35255-.262,9.48341-5.45664,10.12276-10.77735S899.23027,375.41647,896.616,370.73846Z" transform="translate(-203.80173 -68.52653)" fill="#2f2e41"/>
            </svg>
            <p style={{fontSize: '4rem'}}>Oops !</p>
            <p>La page à laquelle tu essaies d'accéder n'existe pas...</p>
        </div>
    )
}