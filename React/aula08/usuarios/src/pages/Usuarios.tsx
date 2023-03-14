import axios from "axios"
import { useEffect, useState } from "react";
import { Usuario } from "../model/Usuario";
import { deleteUsuario, getTodosUsuarios } from "../services/Usuarios"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Link } from "@mui/material";

export function Usuarios() {
  const [ usuarios, setUsuarios ] = useState<Usuario[]>([]);

  const columns: GridColDef[] = [
    { field: 'codigo', headerName: 'Código', width: 90 },
    {
      field: 'nome',
      headerName: 'Nome',
      width: 150,
    },
    {
      field: 'sobrenome',
      headerName: 'Sobrenome',
      width: 150,
    },
    {
      field: '',
      headerName: 'Ações',
      renderCell: (params) => {
        return (
          <div>
            <a href={`/usuarios/${params.row.codigo}`}>Ver</a>
            <button onClick={() => onClickDeleteUsuario(params.row.codigo||0)}>Delete</button>
          </div>
        )
      }
    }
  ];

  const loadData = async () => {
    const usuarios: Usuario[] = await getTodosUsuarios();
    setUsuarios(usuarios);
  }

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteUsuario = (id: number) => {
    deleteUsuario(id).then(() => loadData());
  }

  return (
    <div>
      <span>Usuarios</span>
      <a href="/usuarios-criar">Criar usuário</a>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={usuarios}
          columns={columns}
          getRowId={usuario => usuario.codigo}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </div>
  )
}
