package org.example;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "articulo")
public class Articulo {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "cantidad")
    private int cantidad;

    @Column(name = "denominaciones")
    private  String denominaciones;

    @Column(name = "precio")
    private int precio;

    @OneToMany(mappedBy = "articulo", cascade = CascadeType.PERSIST)
    private List<DetalleFactura> detalle = new ArrayList<DetalleFactura>();

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "articulo_categoria", joinColumns = @JoinColumn(name = "articulo_id"),
    inverseJoinColumns = @JoinColumn(name = "categoria_id"))
    private List<Categoria> categorias = new ArrayList<Categoria>();

    public Articulo() {
    }

    public Articulo(int cantidad, String denominaciones, int precio) {
        this.cantidad = cantidad;
        this.denominaciones = denominaciones;
        this.precio = precio;
    }

    public Articulo(int cantidad, String denominaciones, int precio, List<DetalleFactura> detallee) {
        this.cantidad = cantidad;
        this.denominaciones = denominaciones;
        this.precio = precio;
        this.detalle = detalle;
    }

    public Articulo(int cantidad, String denominaciones, int precio, List<DetalleFactura> detalle, List<Categoria> categorias) {
        this.cantidad = cantidad;
        this.denominaciones = denominaciones;
        this.precio = precio;
        this.detalle = detalle;
        this.categorias = categorias;
    }

    public List<Categoria> getCategorias() {
        return categorias;
    }

    public void setCategorias(List<Categoria> categorias) {
        this.categorias = categorias;
    }

    public List<DetalleFactura> getDetalle() {
        return detalle;
    }

    public void setDetalle(List<DetalleFactura> detalle) {
        this.detalle = detalle;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public String getDenominaciones() {
        return denominaciones;
    }

    public void setDenominaciones(String denominaciones) {
        this.denominaciones = denominaciones;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }


}
