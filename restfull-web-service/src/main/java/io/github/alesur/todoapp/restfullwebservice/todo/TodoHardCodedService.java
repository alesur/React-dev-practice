package io.github.alesur.todoapp.restfullwebservice.todo;



import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList();
    private static int  idCounter = 0;

    static{
        todos.add(new Todo(++idCounter, "admin", "Learn to Fly", new Date(), false ));
        todos.add(new Todo(++idCounter, "admin", "Learn to Sky", new Date(), false ));
        todos.add(new Todo(++idCounter, "admin", "Learn to Code on React", new Date(), false ));
    }

    public List<Todo> findAll(){ return todos; }

    public Todo deleteById(long id) {
        Todo todo = findByid(id);
        if (todo==null) return null;

        if (todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    public Todo findByid(Long id) {
        for(Todo todo:todos) {
            if(todo.getId()==id){
                return todo;
            }
        }
        return null;
    }

}
