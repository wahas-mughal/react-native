import { StyleSheet, ImageBackground } from 'react-native';



export const globalstyles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'whitesmoke',

    },
    header:{
        paddingVertical: 120,
    },
    loginContent:{
       flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -150,
    },
    orText: {
        fontSize: 20,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,

    },
    SignUpCont: {
        //flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 30,
        flexDirection: 'row',
        backgroundColor: 'rgb(256,256,256)',
        opacity: 2,
        borderRadius: 10,
        padding: 5,
    },
    SignUpText: {
        fontSize: 17,
    },
    SignUpButton: {
        fontSize: 17,
        fontWeight: '500',
        color: '#03c4ff',
    },
    forgotContainer: {
        backgroundColor: 'rgb(256,256,256)',
        opacity: 2,
        borderRadius: 10,
        margin: 15,
        padding: 5,
        width: 170,
        marginLeft: 40
    },
    ForgotContent:{
        alignItems: "center",
        fontWeight: "bold",
    },
    SignUpcontent: {
        paddingTop: 100,
        justifyContent: 'center',
        alignItems: "center",
    },
    SignUpfooter:{
        paddingVertical:20,
        justifyContent: 'center',
        alignItems: "center",
    },
    BackScreen:{
        backgroundColor: 'rgb(256,256,256)',
        opacity: 2,
        borderRadius: 10,
        fontSize: 18,
        color: '#03c4ff',
        marginTop: 30,
        padding: 8,     
        fontWeight: 'bold',
    },

    InputContainer:{
        paddingBottom: 14,
        width: 255,
    },

    inputBox: {
        width: 250,
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginBottom: 20,
        borderRadius: 10,
        borderBottomColor: '#03c4ff',
        borderBottomWidth: 1,
        color: 'white',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#03c4ff',
        borderRadius: 10,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        marginBottom: 10,
        width: 200,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    smallbutton: {
        flexDirection: 'row',
        borderRadius: 10,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        marginBottom: 10,
        width: 120,
    },
    smallbuttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    gmbuttonText:{
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    fbIcon: {
        color: 'white',
        fontSize: 20,
        marginEnd: 10,
    },
    gmailIcon: {
        color: 'red',
        fontSize: 20,
        marginEnd: 10,
    },

    BackwardIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        paddingLeft: 20,
    },

    ForwardIcon:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        paddingRight: 20,
    },

    CameraHeader:{
        width: '100%',
        height: 80,
        backgroundColor: '#03c4ff',
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },

    IdentityCameraContent:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '60%'
        },

    cameraContent:{
        width: '100%',
        height: 150,
        padding: 30, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        height: '26%'
        },

    card:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 2},
        elevation: 6,
        backgroundColor: 'white',
    },
    containers: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'whitesmoke',
    },
    Texttitle: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
    },
    Header:{
        width: '100%',
        height: 80,
        backgroundColor: '#03c4ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingBox:{
        flexDirection: 'row',
        padding: 20,
    },
    settingFooter:{
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    NameScreenContent:{
        width: '100%',
        height: 570,
        backgroundColor: 'whitesmoke'        
    },
    CPassScreenContent:{
            paddingTop:40,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#03c4ff',
        borderRadius: 10,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        marginBottom: 10,
        width: 300,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    BookContectScr:{
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 10,
        width:190,
    }
});