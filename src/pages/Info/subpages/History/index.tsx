import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setHeader } from "@/store/slices/uiSlice";
import { EmptyData } from "@/components/Empty/EmptyData";
import { IconBox, ListItem } from "@/pages/Info/subpages/History/History.styled";
import { dummyActivities } from "@/constants/dummy/data";
import Icon from "@/components/Common/Icon";
import dayjs from "dayjs";


interface HistoryListComponentProps {
    historyList?: any[];
}

const renderIcon = (type: string) => {
    switch (type) {
        case "EXERCISE":
            return <Icon icon="LiftingWeights" style={{border: 'none'}} />;
        case "SHOWER":
            return <Icon icon="Bathtub" />;
        case "SLEEP":
            return <Icon icon="Bad" />;
        case "TALK":
            return <Icon icon="ThoughtBalloon" />;
        case "PAT":
            return <Icon icon="Love" />;
        case "RECOVERY":
            return <Icon icon="Recovery" />;
        default:
            return null;
    }
};
const renderAction = (type: string) => {
    switch (type) {
        case "EXERCISE":
            return "운동하기";
        case "SHOWER":
            return "샤워하기";
        case "SLEEP":
            return "잠자기";
        case "TALK":
            return "대화하기";
        case "PAT":
            return "쓰다듬기";
        case "RECOVERY":
            return "피로도 회복";
        default:
            return null;
    }
};


const SingleHistoryComponent = ({history}) => {
    const [item, _] = useState(history)

    return (
        <ListItem>
            <div className="left">
                <IconBox>{renderIcon(item.action)}</IconBox>
                <div className="text">
                    <span className="action">{renderAction(item.action)}</span>
                    <span className="date">{dayjs(item.start).format("MM월 DD일 HH:mm")}</span>
                </div>
            </div>
            <div className="right">
                {item.mp && (
                    <span className="mp">
                  경험치 {item.mp > 0 ? "+" : ""}
                        {item.mp}%
                </span>
                )}
                {item.hp && (
                    <span className="hp">
                  피로도 {item.hp > 0 ? "+" : ""}
                        {item.hp}%
                </span>
                )}
            </div>
        </ListItem>
    );
};

const HistoryListComponent = ({ historyList }: HistoryListComponentProps) => {
    return (
        <ul>
            {historyList.map((history, index) => (
                <div key={index}>
                    <SingleHistoryComponent history={history}/>
                </div>
            ))}
        </ul>
    );
};

const History = () => {
    const dispatch = useDispatch();
    const [historyList, setHistoryList] = useState([]);

    useEffect(() => {
        setHistoryList(dummyActivities);
    }, []);

    useEffect(() => {
        dispatch(setHeader("행동기록"));

        return () => {
            dispatch(setHeader(""));
        }
    }, [dispatch]);


    return (
        <>
            {
                historyList.length > 0
                    ? <HistoryListComponent historyList={historyList}/>
                    : <EmptyData/>
            }

        </>
    );
};

export default History;