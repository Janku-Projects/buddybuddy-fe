import { Call, Cure, Exercise, Shower, Sleep, Status } from "@/components/Common/Icon/Icons.def";

export const TopActionLabel = [
    {
        key: "eat",
        label: "밥",
        icon: "Eat",
        width: 30,
        height: 30,
        handlerAction: () => console.log("onClick")
    },
    {
        key: "sleep",
        label: "수면",
        icon: "Sleep",
        width: 30,
        height: 30,
        handlerAction: () => console.log("onClick")
    },
    {
        key: "play",
        label: "놀기",
        icon: "Play",
        width: 30,
        height: 30,
        handlerAction: () => console.log("onClick")
    },
    {
        key: "cure",
        label: "치료",
        icon: "Cure",
        width: 30,
        height: 30,
        handlerAction: () => console.log("onClick")
    },
];


export const BottomActionLabel = [
    {
        key: "shower",
        label: "목욕",
        icon: "Shower",
        width: 30,
        height: 30,
        handlerAction: () => console.log("onClick")
    },
    {
        key: "status",
        label: "상태",
        icon: "Status",
        width: 30,
        height: 30,
        handlerAction: () => console.log("onClick")
    },
    {
        key: "chat",
        label: "말하기",
        icon: "Chat",
        width: 30,
        height: 30,
        handlerAction: () => console.log("onClick")
    },
    {
        key: "call",
        label: "호출",
        icon: "Call",
        width: 30,
        height: 30,
        handlerAction: () => console.log("onClick")
    },
];