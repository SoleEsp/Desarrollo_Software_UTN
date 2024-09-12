Trabajo Practico Enverns

Hibernate Enverns es una dependencia que nos provee con una forma rápida y sencilla de hacer auditorías en nuestro modelo de datos

Utiliza el concepto de "revisiones" para hacer la auditoría de las entidades. Para marcar que una entidad va a ser auditada debo agregarle la anotación @Audited

Una revisión identifica una colección de cambios ocurridos en los atributos de una entidad auditable durante una transacción

Para todas las entidades auditadas se creará una nueva tabla que llevará el mismo nombre de la entidad más el sufijo_AUD. En estas tablas se registrará una copia del estado de los registros (los valores de sus atributos), junto con el número de revisión (REV) y el tipo de revisión (REVTYPE) que será O para una agregación, 1 para una actualización y 2 para una eliminación

Adicionalmente se creará la entidad revision_info donde se guardarán los datos de la revisión (id, fecha, etc)
