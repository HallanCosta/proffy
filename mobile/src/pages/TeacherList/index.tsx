import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, Platform } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFilterVisible] = useState(false);
  const [changeSubjectColor, setChangeSubjectColor] = useState(false);
  const [changeWeek_dayColor, setChangeWeek_dayColor] = useState(false);

  const [subject, setSubject] = useState('');
  const [subjects, setSubjects] = useState([
    { value: 'Artes', label: 'Artes' },
    { value: 'Biologia', label: 'Biologia' },
    { value: 'Ciência', label: 'Ciência' },
    { value: 'Educação física', label: 'Educação física' },
    { value: 'Física', label: 'Física' },
    { value: 'Geografia', label: 'Geografia' },
    { value: 'Historia', label: 'Historia' },
    { value: 'Filosofia', label: 'Filosofia' },
    { value: 'Português', label: 'Português' },
    { value: 'Matemática', label: 'Matemática' },
    { value: 'Química', label: 'Química' },
    { value: 'Sociología', label: 'Sociología' }
  ]);

  const [week_day, setWeekDay] = useState('');
  const [week_dayExtensive, setWeek_dayExtensive] = useState<string>('');
  const [week_daysExtensive, setWeek_daysExtensive] = useState<string[]>([]);
  const [week_days, setWeek_days] = useState([
    { value: 0, label: 'Domingo' },
    { value: 1, label: 'Segunda-feira' },
    { value: 2, label: 'Terça-feira' },
    { value: 3, label: 'Quarta-feira' },
    { value: 4, label: 'Quinta-feira' },
    { value: 5, label: 'Sexta-feira' },
    { value: 6, label: 'Sábado' },
  ]);

  const [time, setTime] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));//new Date(1598051730000)
  const [showTime, setShowTime] = useState(false);


  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });

        setFavorites(favoritedTeachersIds);
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setIsFilterVisible(false);
    setTeachers(response.data);
  }

  function handleChangeTime(selectDate: any) {

    const regExp: RegExp = /\d{2}:\d{2}/g;
    
    const currentDate = selectDate || date;
    const convertTime = selectDate != null ? regExp.exec(selectDate)![0] : time;
    
    setDate(currentDate);
    setTime(convertTime);
    setShowTime(false);
    
  }


  useEffect(() => {
    const week_daysSerialized: string[] = week_days.map(week => week.label);
    const subjectsSerialized: string[] = subjects.map(sub => sub.label);

    setWeek_daysExtensive(week_daysSerialized);
  }, []);

  function handleWeek_dayExtensive(index: any) {
    setWeek_dayExtensive(week_daysExtensive[index]);
  }

  function handleWeek_dayValueChange(value: string) {
    setChangeWeek_dayColor(true);
                    
    if (value === null) {
      setWeekDay('');
      setChangeWeek_dayColor(false);
    } else {
      setWeekDay(value);
      handleWeek_dayExtensive(value);
    }    
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>

            <Text style={styles.label}>Matéria</Text>
            <RNPickerSelect
              style={styles.select}
              value={subject}
              onValueChange={value => {
                setChangeSubjectColor(true);

                if (value == null) {
                  setSubject('');
                  setChangeSubjectColor(false);
                } else {
                  setSubject(value)
                }           
              }}
              items={subjects}
            >
              <Text 
                style={[
                  styles.selectPlaceholderTextColor, 
                  changeSubjectColor ? styles.selectTextColor : {}
                ]}
              >
                {
                  subject == '' 
                  ? 'Qual a matéria'
                  : subject
                }
              </Text>
            </RNPickerSelect>

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>

                <RNPickerSelect
                  style={styles.select}
                  value={week_day}
                  onValueChange={value => handleWeek_dayValueChange(value)}
                  items={week_days}
                >
                  <Text 
                    style={[
                      styles.selectPlaceholderTextColor,
                      changeWeek_dayColor ? styles.selectTextColor : {}
                    ]}
                  >
                    {
                      week_day == '' 
                      ? 'Qual o dia?'
                      : week_dayExtensive
                    }
                  </Text>
                </RNPickerSelect>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                
                <RectButton
                  style={styles.buttonTime}
                  onPress={() => setShowTime(true)}
                >
                  <Text 
                    style={[
                      styles.buttonTimeText, 
                      time != '' ? styles.buttonTimeTextWhenChange : {}
                    ]}
                  >
                    {time == ''
                      ? 'Qual o horário?'
                      : time
                    }
                  </Text>

                </RectButton>
                <DateTimePickerModal
                  isVisible={showTime}
                  mode="time"
                  onConfirm={handleChangeTime}
                  onCancel={() => setShowTime(false)}
                />
              </View>
            </View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default TeacherList