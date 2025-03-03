export interface User {
    userId ?: number;
    name: string;
    createdDate: string;
    lastLoginInDate: string;
    currentBuddyId: number;

}

// SECT: 로그인 한 사용자의 버디 정보
export interface Buddy {
    buddyId?: number; // 버디 아이디: PK
    originalId: number; // 버디 고유 아이디
    name: string; // 버디 닉네임
    exp: string; // 현재 가지고 있는 EXP
    createBy?: number; // 주인 ID
}


export interface Action {
    actionId?: number ; // PK
    isCurrent ?: boolean; // 현재 진행중인지 플래그
    isDone ?: boolean; // 완료 플래그
    startTime: string; // 시작 시간
    endTime: string; // 종료 시간

    userId?: number ; // 만든 사람 (userId)
}





