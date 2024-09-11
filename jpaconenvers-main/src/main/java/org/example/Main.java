package org.example;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("example-unit");

        EntityManager em = emf.createEntityManager();
        System.out.println("en marcha Alberto");

        try {
            // Persistir una nueva entidad Person
            em.getTransaction().begin();

            Persona persona = Persona.builder().
                    nombre("Alberto").
                    edad(60).

                    build();


            em.persist(persona);

            em.getTransaction().commit();

            // Actualizar la persona
            em.getTransaction().begin();
            persona.setEdad(35);
            em.getTransaction().commit();

            System.out.println("Persona actualizada: " + persona);

            // Eliminar la persona
            em.getTransaction().begin();
            em.remove(persona);
            em.getTransaction().commit();

            System.out.println("Persona eliminada: " + persona);




            // Consultar y mostrar la entidad persistida
    //        Persona personaRecuperada = em.find(Persona.class, persona.getId());
   //         System.out.println("Retrieved Persona: " + personaRecuperada.getNombre());

        }catch (Exception e){

            em.getTransaction().rollback();
            System.out.println(e.getMessage());
            System.out.println("No se pudo grabar la clase Persona");}

        // Cerrar el EntityManager y el EntityManagerFactory
      em.close();
        emf.close();
    }
}
