import classNames from 'classnames';

type Props = {
    isSelected: boolean;
    setselectedOrderOption: (e) => void;
    filterOrders: (e) => void;
    opt: any
}

export default function OrderOption({ opt, isSelected, setselectedOrderOption, filterOrders }: Props) {

    return (
        <div onClick={() => {
            setselectedOrderOption(opt);
            filterOrders(opt.id);
        }}
         className={classNames(isSelected ? "bg-sky-600 fill-white stroke-white text-white" : "bg-white fill-gray-500 stroke-gray-500 text-gray-600", " rounded-xl flex flex-col justify-around items-center p-3 px-7")}>
            <div className='w-14 h-14 flex items-center justify-center '>{opt.icon}</div>
            <span className='text-[0.6rem] w-full text-center'>{opt.name}</span>
        </div>
    )
}