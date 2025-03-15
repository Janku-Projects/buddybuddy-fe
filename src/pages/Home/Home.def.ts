import { Call, Cure, Exercise, Shower, Sleep, Status } from "@/components/Common/Icon/Icons.def";


enum eActionProcess {
    EAT,
    SLEEP,
    PLAY,
    CURE,
    SHOWER,
    STATUS,
    CHAT,
    CALL
}


export const TopActionLabel = (handlerAction)  => [
    {
        key: "EAT",
        label: "밥",
        icon: "Eat",
        width: 30,
        height: 30,
        gain: {key: "hunger", value: 40},
        loss: {key: "stamina", value: 10},
        time: 60 * 30 * 1000, // 30분
        handlerAction: () => handlerAction("EAT")
    },
    {
        key: "SLEEP",
        label: "수면",
        icon: "Sleep",
        width: 30,
        height: 30,
        gain: {key: "stamina", value: 100},
        loss: {key: "hunger", value: 30},
        time: 60 * 60 * 1000 * 6, // 6시간
        handlerAction: () => handlerAction("SLEEP")
    },
    {
        key: "PLAY",
        label: "놀기",
        icon: "Play",
        width: 30,
        height: 30,
        gain: {key: "affection", value: 50},
        loss: {key: "hunger", value: 30},
        time: 60 * 60 * 1000, // 1시간
        handlerAction: () => handlerAction("PLAY")
    },
    {
        key: "CURE",
        label: "치료",
        icon: "Cure",
        width: 30,
        height: 30,
        gain: {key: "health", value: 1},
        loss: {key: "stamina", value: 10},
        time: 60 * 10 * 1000, // 10분
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
        gain: {key: "hygiene", value: 50},
        loss: {key: "stamina", value: 20},
        time: 60 * 30 * 1000, // 30분
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
        loss: {key: "stamina", value: 5},
        time: 60 * 30 * 1000, // 30분
        handlerAction: () => handlerAction("CHAT")
    },
    {
        key: "CALL",
        label: "호출",
        icon: "Call",
        width: 30,
        height: 30,
        loss: {key: "stamina", value: 5},
        time: 60 * 10 * 1000, // 10분
        handlerAction: () => handlerAction("CALL")
    },
];