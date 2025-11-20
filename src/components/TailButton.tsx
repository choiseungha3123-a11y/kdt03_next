type BTSItem = {
    base : string,
    hover : string
}

type BTS = {
    darkblue : BTSItem,
    blue : BTSItem,
    orange : BTSItem,
    lime : BTSItem,
    red : BTSItem,
    gray : BTSItem
}

const BTStyle : BTS = {
    darkblue: {
        base: "bg-blue-800",
        hover: "hover:bg-red-900",
    },

    blue: {
        base: "bg-blue-500",
        hover: "hover:bg-blue-900",
    },
    orange: {
        base: "bg-orange-500",
        hover: "hover:bg-orange-900",
    },
    lime: {
        base: "bg-lime-500",
        hover: "hover:bg-lime-900",
    },
    red: {
        base: "bg-red-500",
        hover: "hover:bg-red-900",
    },
    gray: {
        base: "bg-gray-500",
        hover: "hover:bg-gray-900",
    }
} as const;

type BtColor = keyof BTS ;
//type BtColor = keyof typeof BTStyle;
// type BtColor = 'blue' | 'darkblue' | 'orange' | 'lime' | 'red' | 'gray' ;

interface TailButtonProps {
    color: BtColor,
    caption: string,
    onHandle: () => void;
}

export default function Tailbutton({ color, caption, onHandle }: TailButtonProps) {
    const btstyle = BTStyle[color];

    return (
        <button className={`${btstyle.base}  text-white rounded
                        ${btstyle.hover} hover:font-bold px-4 py-2
                        cursor-pointer
                                         `}
            onClick={onHandle}>
            {caption}
        </button>
    )
}
