import { StyleSheet } from "react-native";
import commonStyles from "../../../CommonStyles/commonStyles";

export const styles = StyleSheet.create({
    chatDetailMessageFromMeBox:{
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 10,
        position: "relative",
        width: "100%"
    },
    chatDetailMessageFromMeMainWrapper:{
        flexDirection: "row",
        marginTop: 10,
        marginRight: 10,
        marginLeft: 40,
        flex: 1,
        gap: 8,
        justifyContent: "flex-end",
        width: "100%",
    },
    chatDetailMessageFromMeInfoBox:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        borderBottomRightRadius: 0,
    },
    chatDetailMessageFromMeInfoText:{
        fontSize: 16,
    },
    chatDetailMessageFromMeTimeInfoBox:{
        flexDirection: "row",
        marginRight: "auto",
        alignItems: "center",
        marginTop: 4
    },
    chatDetailMessageFromMeTimeInfoClockImg:{
        width: 15,
        height: 15,
    },
    chatDetailMessageFromMeTimeInfoClockMilesStone:{
        fontSize: 13,
        marginLeft: 5
    },
    chatDetailMessageFromMeUsername:{
        fontSize: 15,
        fontWeight: "500",
        marginTop: 13,
        textAlign: "right"
    },
    chatDetailMessageFromMeTriangle:{
        position: "absolute",
        width: 0,
        height: 0,
        borderLeftWidth: 15,
        borderRightWidth: 0,
        borderBottomWidth: 15,
        borderStyle: "solid",
        backgroundColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        right: 0,
        bottom: -8,
        transform: [{
            rotateX: "180deg"
        }]
    },
    chatDetailMessageFromMeMoreActionBox:{
       height: 25,
       position: "relative",
       zIndex: 10,

    },
    chatDetailAvatarImg:{
        width: 36,
        height: 36,
        borderRadius: 100
    },
    chatDetailMessageFromOpponentBox:{
        flexDirection: "row",
        alignItems: "flex-end",
        position: "relative",
        marginBottom: 10,
    },
    chatDetailMessageFromOpponentMainWrapper:{
        flexDirection: "row",
        marginTop: 10,
        marginRight: 40,
        marginLeft: 10,
        flex: 1,
        gap: 8,
        width: "100%"
    },
    chatDetailMessageFromOpponentMainContainer:{
        flexGrow: 1,
        flexShrink: 1,
    },
    chatDetailMessageFromOpponentInfoBox:{
        paddingHorizontal: 20,
        backgroundColor: commonStyles.secondColor.color,
        paddingVertical: 10,
        borderRadius: 8,
        position: "relative",
        borderBottomLeftRadius: 0,
    },
    chatDetailMessageFromOpponentInfoTextBox:{
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    chatDetailMessageFromOpponentInfoText:{
        fontSize: 16,
        fontWeight: "500",
        color: commonStyles.darkPrimaryText.color
    },
    chatDetailMessageFromOpponentTimeInfoBox:{
        flexDirection: "row",
        marginLeft: "auto",
        alignItems: "center",
        marginTop: 4
    },
    chatDetailMessageFromOpponentTimeInfoClockImg:{
        width: 15,
        height: 15,
        tintColor: "#ffffff80"
    },
    chatDetailMessageFromOpponentTimeInfoClockMilesStone:{
        fontSize: 13,
        marginLeft: 5,
        color: "#ffffff80"
    },
    chatDetailMessageFromOpponentUsername:{
        fontSize: 15,
        fontWeight: "500",
        marginTop: 13
    },
    chatDetailMessageFromOpponentTriangle:{
        position: "absolute",
        width: 0,
        height: 0,
        borderLeftWidth: 0,
        borderRightWidth: 15,
        borderBottomWidth: 15,
        borderStyle: "solid",
        backgroundColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: commonStyles.secondColor.color,
        left: 0,
        bottom: -8,
        transform: [{
            rotateX: "180deg"
        }]
    },
    chatDetailMessageFromOpponentMoreActionBox:{
       height: 25,
       position: "relative",
       zIndex: 400,
    },
    chatDetailTooltipPopupContent:{
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3
    },
    chatDetailTooltipPopupContentArrowNone:{
        width: 0,
        height: 0,
    },
    fileBoxInChatHistory:{
        width: "100%",
        padding: 10,
        flexDirection: "row",
        borderRadius: 6,
        gap: 10,  
        alignItems: "center",
        marginBottom: 3,
        marginVertical: 6
    },
    fileBoxInChatHistoryImgBox:{
        width: 48,
        height: 48,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    fileBoxInChatHistoryNameFile:{
        fontSize: 15,
        fontWeight: "500",
        flexShrink: 1,
    },
    imageInChatHistory:{
        width: "100%",
        height: 140,
        borderRadius: 6,
        borderWidth: 1,
    },
    fileBoxInChatHistoryFileImageIcon:{
        width: 20,
        height: 20,
    },
    actionsWithImageInChatHistoryBox:{
        position: "absolute",
        right: 10,
        bottom: 10,
        flexDirection: "row",
        gap: 15,
    },
    actionWithImageInChatHistoryImg:{
        width: 20,
        height: 20,
        tintColor: commonStyles.darkPrimaryText.color
    },
    chatDetailMessageFromOpponentImageItem:{
        marginTop: 6,
        position: "relative",
    },
    chatDetailMessageFromOpponentImageBox:{
        flexDirection: "column"
    },
    chatDetailAnotherActionWrapper:{
        flexDirection: "row",
        gap: 5,
        height: 25,
    },
    chatDetailReactChooseBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 2
    },
    chatDetailReactChooseBoxBtnImg:{
        width: 28,
        height: 28,

    },
    chatDetailReactedForMsgImg:{
        width: 15,
        height: 15,
    },
    chatDetailMessageReactedForMsgBox:{
        position: "absolute",
        bottom: -13,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderRadius: 25,
        paddingVertical: 2,
        paddingHorizontal: 6,
        zIndex: 30,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3
    },
    chatDetailMessageReactedForMsgCount:{
        fontSize: 13,
    }
})