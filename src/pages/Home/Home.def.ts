import { Call, Cure, Exercise, Shower, Sleep, Status } from "@/components/Common/Icon/Icons.def";

export const TopActionLabel = (handlerAction)  => [
    {
        key: "EAT",
        label: "밥",
        icon: "Eat",
        width: 30,
        height: 30,
        handlerAction: () => handlerAction("EAT")
    },
    {
        key: "SLEEP",
        label: "수면",
        icon: "Sleep",
        width: 30,
        height: 30,
        handlerAction: () => handlerAction("SLEEP")
    },
    {
        key: "PLAY",
        label: "놀기",
        icon: "Play",
        width: 30,
        height: 30,
        handlerAction: () => handlerAction("PLAY")
    },
    {
        key: "CURE",
        label: "치료",
        icon: "Cure",
        width: 30,
        height: 30,
        handlerAction: () => handlerAction("CURE")
    },
];


export const BottomActionLabel = (handlerAction) =>  [
    {
        key: "SHOWER",
        label: "목욕",
        icon: "Shower",
        width: 30,
        height: 30,
        handlerAction: () => handlerAction("SHOWER")
    },
    {
        key: "STATUS",
        label: "상태",
        icon: "Status",
        width: 30,
        height: 30,
        handlerAction: () => handlerAction("STATUS")
    },
    {
        key: "CHAT",
        label: "말하기",
        icon: "Chat",
        width: 30,
        height: 30,
        handlerAction: () => handlerAction("CHAT")
    },
    {
        key: "CALL",
        label: "호출",
        icon: "Call",
        width: 30,
        height: 30,
        handlerAction: () => handlerAction("CALL")
    },
];