import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}



const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    //  console.log(data.results[0]);
    //  let optionsArray=[...data[0].incorrect_answers].push(data[0].correct_answer);
    //  console.log(optionsArray);
    //  optionsArray
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
  }
  useEffect(() => {
    getQuiz();
  }, []);



  const generateOptionsAndShuffle = (_question) => {
    let options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    console.log(options);
    return options
  }

  const handleNextPress = () => {
    setQuestionNumber(questionNumber + 1);
    setOptions(generateOptionsAndShuffle(questions[questionNumber + 1]))
  }

  const handleSelectedOption = (_option) => {
    if (_option === questions[questionNumber].correct_answer) {
      setScore(score + 100);
    }
    if(questionNumber!==9){
      setQuestionNumber(questionNumber + 1);
      setOptions(generateOptionsAndShuffle(questions[questionNumber + 1]))
    }

  }
  
  const handleShowResult=()=>{
    navigation.navigate('Results',{
      score:score
    });
  }
  return (
    <View style={styles.container}>
      {questions && (

        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>Q. {decodeURIComponent(questions[questionNumber].question)}</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton} onPress={() => { handleSelectedOption(decodeURIComponent(options[0])) }}>
              <Text style={styles.option}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => { handleSelectedOption(decodeURIComponent(options[1])) }}>
              <Text style={styles.option}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => { handleSelectedOption(decodeURIComponent(options[2])) }}>
              <Text style={styles.option}>
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => { handleSelectedOption(decodeURIComponent(options[3])) }}>
              <Text style={styles.option}>
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity> */}

            {/* Condtional Next Button  */}

            {questionNumber !== 9 && <TouchableOpacity style={styles.button} onPress={handleNextPress}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>}

            {questionNumber === 9 && <TouchableOpacity style={styles.button} onPress={handleShowResult}>
              <Text style={styles.buttonText}>SHOW RESULTS</Text>
            </TouchableOpacity>}

            {/* <TouchableOpacity onPress={()=>{navigation.navigate("Results")}}>
          <Text>END</Text>
        </TouchableOpacity> */}
          </View>
        </View>
      )}

    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
    paddingTop: 30,
    paddingHorizontal: 20,

  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 12,
  },
  button: {
    // width:'100%',style={styles.
    backgroundColor: '#1E2749',
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#3D4A7F',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  }
})