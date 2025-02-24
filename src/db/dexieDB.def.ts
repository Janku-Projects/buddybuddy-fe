export interface User {
    userId ?: number;
    name: string;
    createdDate: string;
    lastLoginInDate: string;
    currentBuddyId: number;

}

// SECT: 로그인 한 사용자의 버디 정보
export interface Buddy {
    buddyId?: number;
    name: string;
    exp: string;
    createBy?: number;
}





