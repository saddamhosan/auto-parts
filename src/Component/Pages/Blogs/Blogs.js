import React from 'react';

const Blogs = () => {
    
    return (
      <div className="grid md:grid-cols-2 gap-6 m-6">
        <div className="bg-slate-200 p-4 rounded-xl">
          <p className="text-xl font-bold ">
            Q: How will you improve the performance of a React Application?
          </p>
          <p className="text-xl font-semibold">
            Ans:1. By Using Immutable Data Structures. <br />
            2. By Using Function/Stateless Components and React.PureComponent.{" "}
            <br />
            3. By Using Production Mode Flag in Webpack. <br /> 4. Dependency
            optimization. <br /> 5. By Using React.Fragments to Avoid Additional
            HTML Element Wrappers. <br /> 6. Avoid using Index as Key for map.{" "}
            <br /> 7. Avoiding Props in Initial States.
          </p>
        </div>
        <div className="bg-slate-200 p-4 rounded-xl">
          <p className="text-xl font-bold">
            Q: What are the different ways to manage a state in a React
            application?
          </p>
          <p className="text-xl font-semibold">
            Ans:There are four main types of state React apps. Those are Local
            state, Global state, Server state & URL state. Local State: By using
            useState,useReducer,useCallback can manage Local State Global State:
            By using Context API,useReducer,useContext can manage Local Global
            State Server State: By using useState,useEffect,React Query,fetcher,
            useSWR can manage Server State Manage URL State: By using
            useRouter,useParams can manage Manage URL State
          </p>
        </div>
        <div className="bg-slate-200 p-4 rounded-xl">
          <p className="text-xl font-bold">
            Q:How does prototypical inheritance work?
          </p>
          <p className="text-xl font-semibold">
            Ans:The Prototypal Inheritance is a feature in javascript used to
            add methods and properties in objects. It is a method by which an
            object can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [Prototype] of an object,
            we use Object.getPrototypeOf and Object.
          </p>
        </div>
        <div className="bg-slate-200 p-4 rounded-xl">
          <p className="text-xl font-bold">
            Q:What is a unit test? Why should write unit tests?
          </p>
          <p className="text-xl font-semibold">
            Ans:Unit testing involves the testing of each unit or an individual
            component of the software application. It is the first level of
            functional testing. The aim behind unit testing is to validate unit
            components with its performance.Unit testing helps tester and
            developers to understand the base of code that makes them able to
            change defect causing code quickly. Unit testing helps in the
            documentation. Unit testing fixes defects very early in the
            development phase that's why there is a possibility to occur a
            smaller number of defects in upcoming testing levels. It helps with
            code reusability by migrating code and test cases.
          </p>
        </div>
        <div className="bg-slate-200 p-4 rounded-xl">
          <p className="text-xl font-bold">
            Q: You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </p>
          <p className="text-xl font-semibold">
            Ans: Array.filter(pd=>pd.name.includes('value of name'))
          </p>
        </div>
      </div>
    );
};

export default Blogs;