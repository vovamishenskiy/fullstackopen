const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    );
};

const Header = ({ course }) => {
    return <h2>{course.name}</h2>
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
};

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    );
};

const Total = ({ course }) => {
    const sum = course.parts.reduce((sum, part) => {
        return sum + part.exercises;
    }, 0);
    return <p>total of {sum} exercises</p>;
};

export default Course;