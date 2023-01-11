// create Student class

class Student {

    constructor(university, course, fullName, ...marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isActive = true;
        this.savedMarks = [];
    }

    get newMark() {
        if (this.isActive) {
            return this.marks;
        }
    }

    set newMark(mark) {
        if (this.isActive) {
            this.marks.push(mark);
        }
    }

    getInfo() {
        console.log(`Студент ${this.course} ${this.university}, ${this.fullName}`);
    }

    getAverageMark() {
        let sum = this.marks.reduce((a, b) => a + b, 0);
        let average = sum / this.marks.length;
        console.log(average.toFixed(1));
    }

    dismiss() {
        this.isActive = false;
        this.savedMarks = this.marks;
        this.marks = null;
    }

    recover() {
        this.isActive = true;
        this.marks = this.savedMarks;
    }
}
const student = new Student("Вищої Школи Психотерапії м.Одеса", "1го курсу", "Остап Родоманський Бендер", 5, 4, 4, 5);
console.log(student);

// create method this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер",
student.getInfo();

// create getter/setter methods for marks
student.newMark = 5;
console.log(student.marks);

// create method this.getAverageMark()
student.getAverageMark();

// dismiss student method
const student2 = new Student("Львівської фінансової академії м. Львів", "3го курсу", "Анастасія Вікторівна Волчук", 5, 5, 4, 5);
student2.dismiss();
console.log(student2);
console.log(student2.marks);

// recover method
student2.recover();
console.log(student2);
console.log(student2.marks);