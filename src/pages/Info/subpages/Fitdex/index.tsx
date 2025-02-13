import { useDispatch, useSelector } from "react-redux";
import {
    FitdexContainer, FitdexImageRow,
    FitdexRow,
    FitdexRowBody, FitdexRowDescription,
    FitdexRowHeader,
    FitdexWrapper
} from "@/pages/Info/subpages/Fitdex/Fitdex.styled";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import {importAll} from "@/Util/util";

const indexDescription = [
    "님들 저 하츄핑 MBTI 에서 하츄핑 나왔습니다 !! 이거 하츄핑 극장판 보러갈 각입니다! ",
    "궁예왕 그 자가, 미치지 않고서야 어떻게 수달이를.. 그렇게 참혹하게 죽일 수가 있단 말인가..",
    "이상이는 이가 자주 상합니다. 보이는 두개의 이빨은 사실 이빨이 아니라, 눈입니다 !",
];



// @ts-ignore
const images = importAll(require.context("src/assets/images/buddies/", false, /\.(png|jpe?g|svg)$/));
console.log(112, images)

const Fitdex = () => {
    const { userData } = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();
    const [buddies, setBuddies] = useState<[]>([]);
    const [fileName, setFileName] = useState<string>("");
    const [myBuddies, setMyBuddies] = useState<string[]>([]);


    const fetchBuddyDictionary = async () => {
        if (!userData) return;
        // const res = await getDictionary({ uuid: userData.uuid });
        // if (res.status === 200) {
        //     setMyBuddies(res.data);
        // }
    };

    useEffect(() => {
        const modifiedBuddies = images
            .filter((item: any) => {
                const fileNM = item.name.split("/")[0];
                const level = fileNM.split("_lv_")[0];

                // 이름 설정
                if (fileNM.includes("chicken")) item.characterName = "삐약이";
                if (fileNM.includes("otter")) item.characterName = "수달이";
                if (fileNM.includes("monster")) item.characterName = "이상이";

                // myBuddies에 포함된 친구만 보여주기
                const array = item.name.split("/");
                if (array.length === 1) {
                    return myBuddies.map((buddy) => buddy.toLowerCase()).includes(level.toLowerCase());
                }
                return false;
            })
            .reduce((accumulator: any[], currentValue: any, index: number) => {
                if (index % 3 === 0) {
                    accumulator.push([]);
                }
                accumulator[accumulator.length - 1].push(currentValue);

                return accumulator;
            }, []);

        // @ts-ignore
        setBuddies([...modifiedBuddies]);
    }, [myBuddies]);
    useEffect(() => {
        fetchBuddyDictionary();
    }, []);

    return (
        <>
            <FitdexWrapper>
                <FitdexContainer>
                    {buddies.map((item: any, index) => (
                        <FitdexRow key={index}>
                            <FitdexRowHeader>{<p>{item[0].characterName}</p>}</FitdexRowHeader>
                            <FitdexRowBody>
                                {item.map((item2: any, index2: any) => (
                                    <FitdexImageRow tag={`${index2 + 1}`} key={index2} onClick={() => {
                                    }}>
                                        <div className="image-tag">
                                            <p>{`LV${index2 + 1}`}</p>
                                        </div>
                                        <img
                                            src={item2.path}
                                            alt="Random"
                                            width="98"
                                            height="98"
                                            key={`image-${index + 1}`}
                                            style={{ objectFit: "cover" }}
                                        />
                                    </FitdexImageRow>
                                ))}
                            </FitdexRowBody>
                            <FitdexRowDescription>
                                <p>
                                    {indexDescription[index]}
                                </p>
                            </FitdexRowDescription>
                        </FitdexRow>
                    ))}
                </FitdexContainer>
            </FitdexWrapper>

        </>
    );
};

export default Fitdex;