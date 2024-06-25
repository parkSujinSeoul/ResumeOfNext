// @ts-check

module.exports = async (phase, { defaultConfig }) => {
    return {
        //TODO useEffect가 두번 실행 되어서 아래와 같이 설정 하였지만 옳은 방법인지는 찾아봐야함
        reactStrictMode: false,
    }
}