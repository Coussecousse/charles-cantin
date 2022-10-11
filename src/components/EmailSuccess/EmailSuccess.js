import React, { useEffect } from "react";

import data from '../../home.json'

export default function EmailSucess() {
    useEffect(() => {
        document.title = data[0].siteTitle + ' | Email envoyé';
        document.querySelector('meta[name="description"]').setAttribute("content", "Votre email a été envoyé avec succès.");
    });
    return (
        <div className="container container-svg">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="574.90338" height="685.12347" viewBox="0 0 574.90338 685.12347"     xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M535.21353,669.76149C523.7742,657.964,507.197,651.198,489.7324,651.198l-.67366.0018a64.94392,64.94392,0,0,1-32.739-8.84135l-1.03409-.60252.83287-.85816a63.30131,63.30131,0,0,0,11.16314-15.80468,19.14148,19.14148,0,0,1-15.44809,4.99045,19.60034,19.60034,0,0,1-14.3887-9.21623c-6.104-9.9039-13.38014-23.95679-13.38014-34.66239a65.14178,65.14178,0,0,1,21.25244-48.06872,40.5648,40.5648,0,0,0,13.40024-30.24646l-.00339-.81119a92.00118,92.00118,0,0,1,2.73077-22.26282l.18428-.73531.75654.02642a62.19468,62.19468,0,0,0,14.54317-1.21836,49.08873,49.08873,0,0,1-13.04274-3.469l-.8139-.32926.27622-.834c19.04033-11.789,62.0198-5.68406,86.96637-62.76026,20.22826-46.281,91.60044,41.0837,91.60044,91.58261,0,5.15282-5.09952,11.96217-1.282,15.36791,41.26735,36.81648,12.79346,60.45772,3.81611,84.24647-2.13,5.64417,2.48845,11.84039,2.48845,17.94669,0,1.03612-.02642,2.10566-.07859,3.17882l-.07949,1.64993-1.376-.91553a45.57512,45.57512,0,0,1-7.52632-6.17336,39.71824,39.71824,0,0,1-1.2597,34.28909c-4.3247,8.1625-8.5087,14.00614-12.43548,17.36744a64.93049,64.93049,0,0,1-88.96861-4.27456Z" transform="translate(-312.54831 -107.43826)" fill="#e6e6e6"/>
                <path d="M604.30381,792.56174a1.16881,1.16881,0,0,0,1.15574-1.00412c.04966-.3489,4.91374-35.42927.54524-82.05255-4.03433-43.05771-16.99018-105.076-55.80087-156.01058a1.1689,1.1689,0,1,0-1.85945,1.41695c38.47547,50.49476,51.32689,112.058,55.33277,154.81165,4.3431,46.352-.48284,81.15879-.53211,81.505a1.16986,1.16986,0,0,0,1.15868,1.33362Z" transform="translate(-312.54831 -107.43826)" fill="#3f3d56"/>
                <path d="M572.632,625.34009a1.16886,1.16886,0,0,0,.68812-2.11438,161.09887,161.09887,0,0,0-35.56483-18.10445c-19.62175-7.18364-49.45954-13.6961-80.177-3.9198a1.16873,1.16873,0,1,0,.70885,2.22738c30.08815-9.5754,59.38508-3.17062,78.66439,3.88784a158.452,158.452,0,0,1,34.99428,17.80006A1.16421,1.16421,0,0,0,572.632,625.34009Z" transform="translate(-312.54831 -107.43826)" fill="#3f3d56"/>
                <path d="M626.12855,492.10023a1.16886,1.16886,0,0,0-2.05934-.8386,161.09866,161.09866,0,0,0-20.61864,34.1687c-8.578,19.05347-17.22236,48.34479-9.68357,79.68656a1.16873,1.16873,0,1,0,2.27265-.5466c-7.38374-30.69961,1.11423-59.45923,9.54276-78.18016a158.4516,158.4516,0,0,1,20.274-33.62155A1.16426,1.16426,0,0,0,626.12855,492.10023Z" transform="translate(-312.54831 -107.43826)" fill="#3f3d56"/>
                <path d="M851.583,791.32412H758.53414l-.39976-.7256c-1.1897-2.15762-2.33834-4.44394-3.41167-6.79323-9.58472-20.51932-13.63574-43.98758-17.21033-64.6931L734.82082,703.505a9.63638,9.63638,0,0,1,15.16908-9.42728q21.21138,15.43467,42.43919,30.83922c5.35846,3.89906,11.47812,8.41145,17.339,13.288.56542-2.74632,1.15685-5.50085,1.74828-8.217a9.64275,9.64275,0,0,1,17.61009-3.04477l10.88669,17.491c7.94049,12.77323,14.94866,25.36028,13.52074,38.93578a2.1217,2.1217,0,0,1-.037.49286,30.69321,30.69321,0,0,1-1.57988,6.53585Z" transform="translate(-312.54831 -107.43826)" fill="#f0f0f0"/>
                <path d="M808.23232,425.51335l-17.95773-66.46691a11.113,11.113,0,0,0-13.48035-7.8344l0,0a11.113,11.113,0,0,0-7.84261,14.09225l20.77033,68.471,10.867,42.13754a9.69773,9.69773,0,1,0,12.43377.55483Z" transform="translate(-312.54831 -107.43826)" fill="#a0616a"/>
                <path d="M657.12182,411.19825l54.56256-41.99116a11.113,11.113,0,0,0,2.08937-15.451l0,0a11.11306,11.11306,0,0,0-16.01958-1.86315L642.41423,397.249l-34.78838,26.14254a9.69774,9.69774,0,1,0,4.238,11.70239Z" transform="translate(-312.54831 -107.43826)" fill="#a0616a"/>
                <path d="M701.59276,420.85125l-2.405,53.71423,75.516-16.41268c-6.42765-21.58351-10.79819-25.26495-5.96825-40.28567Z" transform="translate(-312.54831 -107.43826)" fill="#a0616a"/>
                <path d="M748.02576,322.37821H722.86345l-10.80585,18.491-5.14893-.28426a18.55018,18.55018,0,0,0-19.57274,18.522v0l6.3442,9.833s-11.346,19.77327,4.99759,29.501c0,0-2.915,18.32813,0,18.13112s9.62932-3.92716,2.915-.197-6.21334,4.23109-5.34477,5.09967l.86858.86857L767.71744,434.198s2.06506-13.68647,2.28762-16.12774-1.26951,3.527.22255-2.44127,3.73015-3.73015,1.49206-5.96824,14.50148-29.96561,7.62376-40.72088l11.027-10.75526v0c0-10.31684-16.5698-18.6803-26.88664-18.6803h-1.32156Z" transform="translate(-312.54831 -107.43826)" fill="#e6e6e6"/><polygon points="374.852 663.178 364.667 663.178 359.822 623.895 374.853 623.896 374.852 663.178" fill="#a0616a"/>
                <path d="M656.66086,785.64314a4.33186,4.33186,0,0,0,4.30438,4.313H680.137l.594-1.231,2.71178-5.5957,1.05024,5.5957.23246,1.231h7.23133l-.1033-1.23967-1.92836-23.12319-2.52236-.155-10.89868-.64566-2.67736-.16357v6.90425C671.79509,773.69416,655.85163,781.86387,656.66086,785.64314Z" transform="translate(-312.54831 -107.43826)" fill="#2f2e41"/><polygon points="526.21 636.502 517.645 642.012 492.317 611.596 504.959 603.465 526.21 636.502" fill="#a0616a"/>
                <path d="M821.03676,773.20854a4.33185,4.33185,0,0,0,5.95346,1.29845l16.12351-10.37248-.16647-1.35669-.74682-6.17316,3.91069,4.13779.86153.90955,6.08158-3.91237-.75757-.98667-14.13209-18.40339-2.20515,1.23436-9.51515,5.3535-2.34017,1.311,3.73541,5.8065C827.3,754.97134,818.3115,770.468,821.03676,773.20854Z" transform="translate(-312.54831 -107.43826)" fill="#2f2e41"/>
                <path d="M886.26723,792.04189l-315.3575.30731a1.19069,1.19069,0,0,1,0-2.38135l315.3575-.30731a1.19069,1.19069,0,0,1,0,2.38135Z" transform="translate(-312.54831 -107.43826)" fill="#cacaca"/>
                <path d="M773.52024,452.085s-48.27126,25.53342-73.8028,8.113c0,0-5.585,27.05-7.82309,29.28806s-5.80381,3.21322-3.27492,5.70978,3.93659,5.86839-.87043,10.15073-9.60041,2.92358-4.96562,7.33311-14.016,112.584-14.016,112.584,2.98413,100.59751,0,103.64-6.97274,3.72368-3.11336,7.48624,3.85939.84436,3.85939,6.03362v5.18925l1.76581,5.1576H695.502s5.84571-6.79064,0-12.6884,1.779-7.5117,3.5619-13.046,4.767.434,1.78287-5.53429-4.41745-4.83269-4.44682-8.75761,43.98646-157.60731,43.98646-157.60731l5.33107,85.06121,64.125,93.15621,18.875-14.15621s-13.74228-19.34521-10.52876-22.00488-9.47124-5.99512-5.47124-8.99512-5.629-6.02313-2-10-5-14-10-14-12.01709-16.70841-12.01709-16.70841l10.47529-131.9923Z" transform="translate(-312.54831 -107.43826)" fill="#2f2e41"/>
                <path d="M722.35745,268.08368c-.34132.4485-3.06321.207-6.33608-.27091-6.471-.94488-7.35288.17793-12.19052,4.57831-7.00766,6.37424-3.02328,45.25286-6.46685,53.6768l-1.11253.81974a40.01837,40.01837,0,0,0,6.47868-1.813c1.18895-3.75151,2.38119-7.5151,3.58145-11.26354a32.98844,32.98844,0,0,1,2.11547,9.09656c1.66578-.65666,3.32192-2.26263,10.2823-4.41641,3.50489-2.37768,28.86151-4.76841,32.12143-5.8145C759.10385,284.52811,745.77151,273.14473,722.35745,268.08368Z" transform="translate(-312.54831 -107.43826)" fill="#2f2e41"/><circle cx="418.37044" cy="179.82014" r="24.23122" fill="#a0616a"/>
                <path d="M746.17433,265.9481a10.8237,10.8237,0,0,1-3.87253-1.35764,3.68188,3.68188,0,0,1-1.76327-3.4845c.29855-1.7217,2.245-2.74968,3.98928-2.64495a10.85037,10.85037,0,0,1,4.80847,1.94592,7.45286,7.45286,0,0,0-6.3486-6.67888c2.29417-.1236,4.67892-.23263,6.80024.64968s3.889,3.067,3.5064,5.33241c3.56639-.45946,7.08337,2.02543,8.55579,5.306s1.18047,7.13312.00412,10.53113a3.71935,3.71935,0,0,1-1.86434,2.46419c-1.20048.45552-2.49186-.30829-3.532-1.06116a84.44809,84.44809,0,0,1-14.729-13.60319" transform="translate(-312.54831 -107.43826)" fill="#2f2e41"/>
                <path d="M756.73936,313.0199c-1.0273.48361-.49236,2.28285-1.29062,3.08858a3.28112,3.28112,0,0,1-1.2235.761,14.72557,14.72557,0,0,0-1.037-4.37174c-.10441-.25367-.276-.53716-.54459-.51476-.31332.03729-.39537.4476-.40284.75345a12.64094,12.64094,0,0,1-.99223,4.40907c-.00747.01494-.01494.0373-.02236.05223-.23131-.00747-.47-.01493-.69385-.0224-1.73075-.06712-5.5654-4.51343-6.41585-3.00648,2.999-5.31916,6.65459-13.31668,7.21411-19.39681a8.60278,8.60278,0,0,0-.276-3.80478,3.36236,3.36236,0,0,0-2.79761-2.31268,2.1406,2.1406,0,0,0-2.21569,2.447l-.43271-.05965c-4.01365-3.26762-.55206-8.945-5.22222-11.19047-1.58158-.761-11.26505,1.783-12.97349,1.33538a14.70456,14.70456,0,0,0-1.08175-5.24457c-.10441-.25368-.276-.53717-.54459-.51477-.31332.03729-.39538.4476-.40284.75345a12.64118,12.64118,0,0,1-.99224,4.40907,18.47866,18.47866,0,0,0-7.09476.373c-2.04412.53712-3.98378,1.46224-6.03536,1.9546a7.80277,7.80277,0,0,1-6.1324-.67145c-2.60364-1.74569-3.05871-5.61012-1.76063-8.46a16.66222,16.66222,0,0,1,3.74509-4.83426c1.17123-1.134,2.38727-2.22321,3.6033-3.31238q1.63383-1.46595,3.26762-2.93194a39.83766,39.83766,0,0,1,4.37173-3.566A21.56979,21.56979,0,0,1,735.194,256.2022c3.43177.82061,8.01983-.33568,11.16064,1.26826,1.64127.843,5.27444,4.07335,6.71428,5.22222,3.68539,2.93194,1.19135.54293,5.22221,2.23809C767.90264,268.97283,763.65244,309.76547,756.73936,313.0199Z" transform="translate(-312.54831 -107.43826)" fill="#2f2e41"/><circle cx="175.8966" cy="232.17014" r="150.2725" fill="#fff"/>
                <path d="M488.445,491.38065c-83.6875,0-151.77246-68.085-151.77246-151.77246s68.085-151.77246,151.77246-151.77246,151.77246,68.085,151.77246,151.77246S572.13248,491.38065,488.445,491.38065Zm0-300.54492c-82.03321,0-148.77246,66.73926-148.77246,148.77246S406.41177,488.38065,488.445,488.38065,637.21744,421.6414,637.21744,339.60819,570.47818,190.83573,488.445,190.83573Z" transform="translate(-312.54831 -107.43826)" fill="hsl(194, 100%, 46%)"/>
                <path d="M467.94463,417.81825a16.71091,16.71091,0,0,1-13.37125-6.68766L413.57674,356.4675A16.71536,16.71536,0,1,1,440.322,336.40994l26.8214,35.75915,68.88731-103.3296a16.71606,16.71606,0,0,1,27.8172,18.5448L481.85459,410.37421a16.72281,16.72281,0,0,1-13.44471,7.4386C468.2548,417.81553,468.09971,417.81825,467.94463,417.81825Z" transform="translate(-312.54831 -107.43826)" fill="hsl(194, 100%, 46%)"/>
                <ellipse cx="635.79161" cy="197.63686" rx="5.25681" ry="7.55666" transform="translate(36.12401 690.90969) rotate(-81.72174)" fill="#e6e6e6"/>
                <ellipse cx="684.96313" cy="192.83881" rx="5.2568" ry="7.55666" transform="matrix(0.14398, -0.98958, 0.98958, 0.14398, 82.96384, 735.46164)" fill="#3f3d56"/>
                <ellipse cx="622.327" cy="157.82871" rx="5.25681" ry="7.55666" transform="matrix(0.14398, -0.98958, 0.98958, 0.14398, 63.99142, 643.50882)" fill="hsl(194, 100%, 46%)"/>
                <ellipse cx="605.11644" cy="142.58562" rx="4.77581" ry="3.3223" transform="translate(145.41098 639.16833) rotate(-89.56675)" fill="#e6e6e6"/>
                <ellipse cx="597.87072" cy="112.21401" rx="4.77581" ry="3.3223" transform="translate(168.59079 601.78086) rotate(-89.56675)" fill="#3f3d56"/>
                <ellipse cx="654.21588" cy="165.66592" rx="4.77581" ry="3.3223" transform="translate(171.05951 711.17214) rotate(-89.56675)" fill="#e6e6e6"/>
                <ellipse cx="630.45407" cy="177.52991" rx="4.77581" ry="3.3223" transform="translate(135.61373 699.1853) rotate(-89.56675)" fill="hsl(194, 100%, 46%)"/>
                <ellipse cx="663.53134" cy="199.45766" rx="4.77581" ry="3.3223" transform="translate(146.51376 754.02355) rotate(-89.56675)" fill="#3f3d56"/>
                <ellipse cx="353.79161" cy="553.63686" rx="5.25681" ry="7.55666" transform="translate(-557.5641 716.59087) rotate(-81.72174)" fill="#e6e6e6"/>
                <ellipse cx="402.96313" cy="548.83881" rx="5.2568" ry="7.55666" transform="translate(-510.72427 761.14282) rotate(-81.72174)" fill="#3f3d56"/>
                <ellipse cx="340.327" cy="513.82871" rx="5.25681" ry="7.55666" transform="translate(-529.69669 669.19) rotate(-81.72174)" fill="hsl(194, 100%, 46%)"/>
                <ellipse cx="323.11644" cy="498.58562" rx="4.77581" ry="3.3223" transform="translate(-490.44649 710.48449) rotate(-89.56675)" fill="#e6e6e6"/><ellipse cx="315.87072" cy="468.21401" rx="4.77581" ry="3.3223" transform="translate(-467.26668 673.09701) rotate(-89.56675)" fill="#3f3d56"/><ellipse cx="372.21588" cy="521.66592" rx="4.77581" ry="3.3223" transform="translate(-464.79796 782.4883) rotate(-89.56675)" fill="#e6e6e6"/><ellipse cx="348.45407" cy="533.52991" rx="4.77581" ry="3.3223" transform="translate(-500.24374 770.50145) rotate(-89.56675)" fill="hsl(194, 100%, 46%)"/><ellipse cx="381.53134" cy="555.45766" rx="4.77581" ry="3.3223" transform="translate(-489.34371 825.33971) rotate(-89.56675)" fill="#3f3d56"/>
            </svg>
            <p>Email envoyé avec succès !</p>
        </div>
    )
}