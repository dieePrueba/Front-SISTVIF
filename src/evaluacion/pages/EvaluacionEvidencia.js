import React, { useState } from 'react'
import Navbar_dashboard from '../../pages/components/Navbar_dashboard'
import { useGetEvaluacionEvidenciaQuery, useGetCriteriosQuery, useGetEvaluacionEvidencia_modeloCriterioQuery } from '../services/evaluacionApi'
import CriterioButton from '../components/CriterioButton'
import CriterioDataTable from '../components/CriterioDataTable'


export default function EvaluacionEvidencia() {
  const user = JSON.parse(localStorage.getItem('user') || "{}")
  const userDatos = JSON.parse(localStorage.getItem('userDatos') || "{}")
  const { data, isSuccess } = useGetEvaluacionEvidenciaQuery(user.access)
  const { data: dataCriterios, isSuccess: isSuccessCriterios } = useGetCriteriosQuery(user.access)

  const [selectedCriterioId, setSelectedCriterioId] = useState(null);

  const { data: dataEvaluacion, isLoading: isLoadingEvaluacion, isSuccess:isSuccessEvaluacion } = useGetEvaluacionEvidencia_modeloCriterioQuery({ access: user.access, criterio_id: selectedCriterioId, modelo_id: 1 }, {
    skip: selectedCriterioId === null,
  });

  //console.log('data evaluacion', dataEvaluacion)


  const handleCriterioClick = (criterioId) => {
    setSelectedCriterioId(criterioId);
  };


  return (
    <div>
      <Navbar_dashboard />
      <div className='text-xs text-gray-500 mb-1'>Evidencia de acuerdo al modelo de evaluación</div>
      <div>
        {isSuccessCriterios ?
          <div>
            {dataCriterios.map((item) => (
              <CriterioButton key={item.id} criterio={item} onClick={handleCriterioClick} />
            )
            )}
             <a href='/evaluacion/documentos/responsable' className='mr-4 text-xs'>Mis pendientes</a>
             <a href='/evaluacion/estadistica' className='text-xs'>Estadistica</a>
             {userDatos.is_rectora && <a href='/evaluacion/documentos/docente' className='ml-4 text-xs'>Por docente</a>}
          </div>
          :
          <>Cargando criterios</>
        }
       
      </div>

      <div>
        {selectedCriterioId && (
          <div>
            {isSuccessEvaluacion ?
              
              <CriterioDataTable
              dataCriterios={dataEvaluacion}
            />
              :
              <p>cargando datos</p>
            }
          </div>

        )}
      </div>










    </div>
  )
}
