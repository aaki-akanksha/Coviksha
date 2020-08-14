import React,{Component} from 'react';
import {Dimensions,StyleSheet,View,Text, Button,Platform,StatusBar,Image, ImageBackground} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {SplashScreen} from 'expo';

export default class App extends Component {
  // state for buttons
  state={a:'1',b:'0',c:'0'}
  // onpress functions for buttons
  symptoms = ()=>{
    this.setState({a:'0'})
    this.setState({b:'0'})
    this.setState({c:'1'})
  }

  prevention = ()=>{
    this.setState({a:'0'})
    this.setState({b:'1'})
    this.setState({c:'0'})
  }

  home = () =>{
    this.setState({a:'1'})
    this.setState({b:'0'})
    this.setState({c:'0'})
  }
//#FAD0C9FF
  // main return 
  render(){
    return(
      <View>


        <View style={{backgroundColor: '#6E6E6DFF',height: Platform.OS === 'ios' ? 20 : StatusBar.height,}}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="#6E6E6DFF"
            translucent={false}
            networkActivityIndicatorVisible={true} />
        </View>


        <View ><Text style={{fontSize:45,padding:25,fontWeight:"bold",backgroundColor:'#5CC8D790'}}>కోవిక్ష<Text style={{fontSize:15,paddingBottom:20}}>        కరోనా 🦠 శిక్షణ</Text></Text></View>

        <View style={styles.container}>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.touch} onPress={this.home}>
              <Image source={require('./assets/home.png')} style={{height:35,width:30}}/>
          </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.touch} onPress={this.symptoms}>
              <Text style={{color:'grey',fontWeight:'bold'}}>లక్షణాలు</Text>
          </TouchableOpacity>
          </View>
               
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.touch} onPress={this.prevention}>
              <Text style={{color:'grey',fontWeight:'bold'}}>నివారణ</Text>
          </TouchableOpacity>
          </View>
         </View>


         <ImageBackground source={require('./assets/backg.jpg')}  style={{backgroundSize:"cover",width:Dimensions.get('window').width,height:700}} imageStyle={{opacity:0.5}} >
         
         <ScrollView >
           <View  style={styles.page}>
           {this.state.a==='1' &&  <View><Text style={{fontSize:20}}><Text style={{fontWeight:'bold',fontSize:23}}>    కరోనావైరస్ వ్యాధి (కోవిడ్-19)</Text> అనేది కొత్తగా కనుగొన్న కరోనావైరస్ వల్ల కలిగే అంటు వ్యాధి.{'\n'}</Text>
                                         <View style={styles.image}><Image style={{width:300,height:300}} source={require('./assets/mask1.jpg')}/></View>
                                         <Text style={{fontSize:20}}><Text style={{fontWeight:'bold',fontSize:23}}>{'\n'}    కోవిడ్-19</Text> వైరస్ సోకిన చాలా మంది ప్రజలు తేలికపాటి నుండి మితమైన శ్వాసకోశ అనారోగ్యానికి గురవుతారు మరియు ప్రత్యేక చికిత్స అవసరం లేకుండా కోలుకుంటారు. వృద్ధులు, మరియు గుండె జబ్బులు, మధుమేహం, దీర్ఘకాలిక శ్వాసకోశ వ్యాధి మరియు క్యాన్సర్ వంటి వైద్య సమస్యలు ఉన్నవారికి తీవ్రమైన అనారోగ్యం వచ్చే అవకాశం ఉంది.{'\n\n'}    <Text style={{fontWeight:'bold',fontSize:23}}>కోవిడ్-19</Text> ప్రసారాన్ని నివారించడానికి మరియు మందగించడానికి ఉత్తమ మార్గం వ్యాధి గురించి సంపూర్ణంగా తెలుసుకోవడం , అది ఎలా వ్యాపిస్తుంది మరియు అది ఎంతలా ప్రమాదకరమో తెలుసుకోవాలి.{'\n'}</Text>
                                         <View style={styles.image}><Image style={{width:300,height:300}} source={require('./assets/kid.jpg')}/></View>                                      
                                         <Text style={{fontSize:20}}><Text style={{fontWeight:'bold',fontSize:23}}>{'\n'}    కోవిడ్-19</Text> వైరస్ ప్రధానంగా లాలాజల బిందువుల ద్వారా లేదా ముక్కు నుండి విడుదలయ్యేటప్పుడు సోకిన వ్యక్తి దగ్గు లేదా తుమ్ము ద్వారా వ్యాపిస్తుంది, కాబట్టి మీరు శ్వాసకోశ మర్యాదలను కూడా పాటించడం చాలా ముఖ్యం (ఉదాహరణకు, దగ్గు మరియు తుమ్ములు వచ్చినప్పుడు మోచేతి లేదా రుమాలు అడ్డుగా పెట్టడం).{'\n\n'}    <Text style={{fontWeight:'bold',fontSize:23}} >నావల్ కరోనా వైరస్</Text> సోకిన వారి పరిస్థితి తీవ్రమైన ప్రభావం ఏమీ చూపవని పరిశోధనల్లో తేలింది. 80 శాతం మంది జలుబు, దగ్గు, జ్వరం వల్ల బాధపడి మందులు వాడటం వల్ల తిరిగి కోలుకుంటున్నారు. 17-18 శాతం మంది తీవ్రంగా అస్వస్థకు గురై, మంచి చికిత్స ద్వారా ఆరోగ్యవంతులవుతున్నారు. రెండు లేదా మూడు శాతం మంది మాత్రమే కోలుకోలేకపోతున్నారు.{'\n\n'}    గుండె జబ్బులు, శ్వాససంబంధిత జబ్బులు ఉన్నవారికి కోవిడ్-19 సోకితే పరిస్థితి తీవ్రంగా ఉంటుందని వైద్యులు చెబుతున్నారు.{'\n\n'}    ఈ సమయంలో, కోవిడ్-19 కోసం నిర్దిష్ట టీకాలు మరియు చికిత్సలు లేవు . అయినప్పటికీ సంభావ్య చికిత్సలను అంచనావేసే క్లినికల్ ట్రయల్స్ నడుస్తునే ఉన్నాయి . క్లినికల్ పరిశోధనలు అందుబాటులోకి వచ్చిన వెంటనే WHO నవీకరించబడిన సమాచారాన్ని అందిస్తూనే ఉంటుంది. </Text>
                                   </View>}


           {this.state.b==="1" &&<View><Text style={{fontSize:20}}><Text style={{fontWeight:"bold",fontSize:23}}>    నావల్ కరోనా వైరస్</Text> సోకిన వ్యక్తి ఇతరులతో మాట్లాడుతుండగా వారి నోటి నుండి వచ్చే తుంపర్లు ఇతరులపై పడితే ఇతరులకు సోకవచ్చు. తుమ్మితే వారి ముక్కు నుండి బయటకు వచ్చే క్రిములు ఇతరులపై పడితే సోకవచ్చు. ఈ వైరస్ సోకిన వ్యక్తి ఇతరులు ఆలింగనం చేసుకున్నా, కరచాలనం చేసినా ఇతరులకు సోకే అవకాశం ఉంటుంది.{'\n'} </Text>
                                       <View style={styles.image}><Image style={{width:300,height:300}} source={require('./assets/pre1.jpeg')}/></View>
                                       <Text style={{fontSize:20}}>{'\n'}    అలాగే వైరస్ సోకిన వ్యక్తి ఉపయోగించే వస్తువులను ఇతరులు వాడినా ఇతరులకు సోకవచ్చు.{"\n\n"}    లిఫ్ట్‌లలో, టేబుళ్లు, మెట్లు ఎక్కేటప్పుడు పట్టుకునే రాడ్లపై కరోనా వైరస్ చేరితే అది 12 గంటల వరకు ఉంటుంది. ఈ 12 గంటలలోగా ఎవరైనా ఈ ప్రాంతంలో చేతులుపెట్టినా, శరీరంలోని ఇతర భాగాలు పెట్టినా వారికి సోకవచ్చు.{"\n\n"}    అందుకే కరోనా సోకిన వ్యక్తి అందరికీ దూరంగా ఉండటం మంచిది. తుమ్మినప్పుడు, దగ్గినప్పుడు చేతిరుమాలు, లేదా నాప్కిన్ అడ్డుగా పెట్టుకోవాలి. {'\n'}</Text>
                                       <View style={styles.image}><Image style={{width:300,height:400}} source={require('./assets/pre.jpeg')}/></View>
                                       <Text style={{fontSize:20}}>{'\n'}    ఈ వ్యాధితో పోరాడాలంటే మన శరీరాన్ని దానికి తగ్గట్టు తయారు చేయాలి. దాని కోసం ముఖ్యంగా ఇవి చేయాలి:{'\n\n'}1.  పౌష్టిక ఆహారం తీసుకోవాలి{'\n'}2.  శారీరిక వ్యాయామం చేయాలి</Text>
                                       <Text style={{fontSize:20}}><Text style={{fontWeight:"bold",fontSize:23,textDecorationLine:'underline',color:'#D1003C'}}>{'\n'}ఆరోగ్యకరమైన ఆహారం నిర్వహించడానికి చేయవలసినవి</Text>{'\n\n \u2022'} పండ్లు మరియు కూరగాయలతో సహా వివిధ రకాల ఆహారాన్ని తినండి.{'\n \u2022'} ఉప్పు మరియు చక్కెర తీసుకోవడం తగ్గించండి.{'\n \u2022'} తగినంత నీరు త్రాగాలి.{'\n \u2022'} ప్రమాదకర మరియు హానికరమైన మద్యపానాన్ని నివారించండి.{'\n \u2022'} నూనె  మరియు కొవ్వు పదార్థాలు తక్కువగా తీసుకోవాలి.{'\n \u2022'} పసిపిల్లలకు తల్లి పాలు ఇవ్వాలి.{'\n'} </Text>
                                       <View style={styles.image}><Image style={{width:300,height:370}} source={require('./assets/food.jpeg')}/></View>
                                       <Text style={{fontSize:23,fontWeight:'bold',textDecorationLine:'underline',color:'#D1003C'}}>{'\n'}శారీరిక దృఢత్వం కోసం చేయవలసినవి{'\n'}</Text>
                                       <View style={styles.image}><Image style={{width:300,height:300}} source={require('./assets/ex2.jpeg')}/><Text>{'\n'}</Text></View>
                                       <View style={styles.image}><Image style={{width:300,height:400}} source={require('./assets/ex3.jpeg')}/><Text>{'\n'} </Text></View>
                                       <View style={styles.image}><Image style={{width:330,height:400}} source={require('./assets/ex1.jpeg')}/><Text>{'\n'} </Text></View>                                       
                                       <Text style={{fontWeight:"bold",textDecorationLine:"underline",fontSize:20}}><Text style={{fontSize:24}}>{"\n"}కోవిడ్-19</Text> యొక్క సంక్రమణని నివారించడానికి మరియు వ్యాప్తిని తగ్గుముఖం చేపట్టడానికి ఇవి చేయగలరు:</Text>
                                       <Text>{"\n\n \u2022"}   తరచుగా చేతులును సబ్బు మరియు నీళ్ళతో లేదా ఆల్కహాల్ ఉన్న శానిటైజర్తో శుభ్రంగా కడుక్కోండి.{"\n \u2022"}   దగ్గు, తుమ్మడం, జ్వరం ఉన్న వ్యక్తుల నుండి కనీసం 1 మీటరు (3 అడుగులు) దూరం ఉండేలా చూసుకోవాలి.{"\n \u2022"}   చేతులు శుభ్రంగా కడుక్కోకుండా ముక్కు, నోరు దగ్గర తాకకూడదు.{"\n \u2022"}   దగ్గు లేదా తుమ్ములు వచ్చినప్పుడు మీ ముఖం ముందు మోచేతి లేదా రుమాలు అడ్డుగా పెట్టండి.{"\n \u2022"}   ఒకవేళ మీ శరీరం అనారోగ్యంగా కనిపిస్తే ఇంట్లోనే ఉంటూ దానికి తగిన జాగ్రత్తలు తీసుకోవాలి.{"\n \u2022"}   కోవిడ్-19 ఊపిరితిత్తుల వ్యాధి కాబట్టి వాటిని హానీ కలిగించే , పొగ త్రాగడం లాంటివి మానేయడానికి ప్రయత్నించాలి.{"\n \u2022"}   అనవసరమైన ప్రయాణాన్ని నివారించి మరియు చాలా వ్యక్తులు ఉన్న స్థలాలకు వెళ్లకుండా సామాజిక దూరాన్ని పాటించాలి.{'\n'}</Text>
                                       <View style={styles.image}><Image style={{width:300,height:300}} source={require('./assets/pre2.jpeg')}/></View>
                                  </View>}


           {this.state.c==="1" && <View><Text style={{fontSize:20}}><Text style={{fontWeight:"bold",fontSize:23}}>    కోవిడ్-19</Text> చాలా మందిని అనేక విధాలుగా ప్రభావితం చేస్తుంది. చాలా మంది సోకినవారు తేలికపాటి మరియు మితమైన అనారోగ్య బారిన పడతారు మరియు ఆసుపత్రిలో చేరకుండానే కోలుకుంటారు . {'\n \n'}<Text style={{textDecorationLine:"underline",fontWeight:"bold"}}>తరుచుగా కనబడే లక్షణాలు:</Text> {'\n\n \u2022'}    జ్వరం     🤒 {'\n \u2022'}    ఆయాసం {'\n \u2022'}    దగ్గు ,జలుబు    🤧 {'\n\n'}<Text style={{textDecorationLine:"underline",fontWeight:"bold"}}>తక్కువగా కనబడే లక్షణాలు:</Text>{'\n\n \u2022'}    ఒంటి నొప్పులు,గొంతునొప్పి   {'\n \u2022'}    గొంతు గరగర{'\n \u2022'}    విరేచనాలు{'\n \u2022'}    కండ్లకలక{'\n \u2022'}    తలనొప్పి    🤯{'\n \u2022'}    రుచి తెలియకపోవడం లేదా వాసన గ్రహించే శక్తిని కోల్పోవడం{'\n \u2022'}   చర్మంపై దురదలు,వేళ్ళ యొక్క రంగు మారడం {'\n \n'}<Text style={{textDecorationLine:"underline",fontWeight:"bold"}}>ఆందోళన చెందాల్సిన/తీవ్రమైన లక్షణాలు: </Text>{'\n\n \u2022'}   శ్వాస అందకపోవడం లేదా శ్వాస తీసుకోవడం కష్టంగా అనిపించడం {"\n \u2022"}    గుండె నొప్పి {'\n \u2022'}   మాట లేదా కదలిక నిలిచిపొవడం {'\n\n'}    తీవ్ర లక్షణాలు గుర్తించిన వేల వీలైన తొందరగా వైద్యులును ఆశ్రయించండి. {'\n \n'}    మితమైన లక్షణాలు ఉన్న వారు మరియు అవి లేని వేల ఆరోగ్యస్తూలు ఇంట్లోనే జాగ్రత్త పడగలరు.{'\n\n'}    వైరస్ సోకిన తరువాత లక్షణాలు బయట పడడానికి సగటు 5-6 రోజులు వ్యవధి గరిష్టంగా 14 రోజులు తీసుకుంటుంది.</Text></View>}
           </View>
         </ScrollView>
         
         </ImageBackground>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
   borderWidth:2,
   //borderColor:"#D1003C",
   borderColor:'grey',
  },
  touch:{
    backgroundColor:'white',
    alignItems:'center',
    borderColor:"white",
    height:35,
    justifyContent:'center',
    },
  page :{
      marginBottom:150,
      marginLeft:8,
      marginTop:17,
      fontSize:20,
  },
  image :{
      alignItems:"center",
      justifyContent:'center',
  }
})